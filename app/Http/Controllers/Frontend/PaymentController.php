<?php namespace App\Http\Controllers\Frontend;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;

use Laracurl;

class PaymentController extends Controller {


	public function index($lang, $type = 'main')
	{

		return view('frontend.payment');

	}

	public function send($lang, Request $request){

		// Ответ браузеру
		$this->json = array(
			'status' => false,
			'message' => false,
			'field' => false,
			'url' => false
		);

		// Данные авторизации
		$config = array(
			'uname' => 'web',
			'upass' => 'Be2ooYuqua',
			'url'   => 'http://195.13.182.221:8083/json'
		);

		$post = $request->all();

		if(!isset($post['num']) OR !is_numeric($post['num'])){
			$this->json['field'] = 'phone';
			$this->json['message'] = '';
			return response()->json($this->json);
		}
		if(!isset($post['summ']) OR !is_numeric($post['summ'])){
			$this->json['message'] = array('payment_incorrect_summ');
			return response()->json($this->json);
		}

		$digest = sha1(sha1($config['upass']) . '::ffff:195.13.176.50'); //xomobile
		//$digest = sha1(sha1($config['upass']) . '::ffff:195.13.176.50'); //buben
		//$digest = sha1(sha1($config['upass']) . '::ffff:77.121.69.136');

		//$rpc_client = JSONRPC_Client::factory();

		try{

			if(!$post['method'] OR $post['method'] == 'card'){
				// Если нет метода оплаты или выбрано картой то тогда АПИ для sweden bank
				$rpc_data = array(
					"domain" => "Safeum",
					"uname" => $config['uname'],
					"digest" => $digest,
					"inum" => "3712" . $post['num'],
					"amount" => $post['summ'],
					"description" => "payment",
					// Передаем возвращаемый обратно параметр, в нашем случае "язык"
					"context" => $lang
				);

				if(isset($post['vat'])){
					$rpc_data['vat'] = $post['vat'];
					$rpc_data['vat']['IP'] = $_SERVER['REMOTE_ADDR'];
					$rpc_data['vat']['Locale'] = $this->get_locale($lang);
					if($rpc_data['vat']['needed'] === 'false'){
						$rpc_data['vat']['needed'] = false;
					}else if($rpc_data['vat']['needed'] === 'true'){
						$rpc_data['vat']['needed'] = true;
					}
				}

				$rpc_response = $this->rpc_request(
					$config['url'],
					'safeum.WebPaymentRequest',
					$rpc_data
				);
			}else{
				// Иначе через АПИ payonline
				$rpc_data = array(
					"domain" => "Safeum",
					"uname" => $config['uname'],
					"digest" => $digest,

					"inum" => "3712" . $post['num'],
					"amount" => $post['summ'],
					"currency" => "EUR",
					"description" => "payment",
					"language" => $lang,
					"method" => $post['method'],

					"success-url" => url('/'.$lang.'/payment/success'),
					"failure-url" => url('/'.$lang.'/payment/failure'),

					// Передаем возвращаемый обратно параметр, в нашем случае "язык"
					"context" => $lang
				);

				//$this->json['rpc_data'] = $rpc_data;

				$rpc_response = $this->rpc_request(
					$config['url'],
					'dialer.PayOnlinePaymentRequest',
					$rpc_data
				);
			}


		}catch (Exception $e){
			$this->json['status'] = false;
			$this->json['message'] = array($e->getMessage(), $e->getTraceAsString());
			return response()->json($this->json);
		}

		//dd($rpc_response);

		// Если нет ответа от сервера
		if(!isset($rpc_response['result'])){
			$this->json['status'] = false;
			$this->json['message'] = 'payment_server_error';
			return response()->json($this->json);
		}

		// Если ошибка от сервера
		if(!$rpc_response['result']){
			$this->json['status'] = false;
			switch($rpc_response['error']){
				case 'Invalid card in this domain':
				case 'Unknown card':
					$this->json['field'] = 'phone';
					$this->json['message'] = 'payment_incorrect_phone';
					break;
				default:
					$this->json['message'] = $rpc_response['error'];
			}
			return response()->json($this->json);
		}

		// Если не передан урл для редиректа
		if(!isset($rpc_response['url'])){

			$this->json['status'] = false;
			$this->json['message'] = 'payment_server_error';
			return response()->json($this->json);
		}

		$this->json['url'] = $rpc_response['url'];
		$this->json['status'] = true;

		return response()->json($this->json);

	}

	public function vat($lang, Request $request)
	{

		// Ответ браузеру
		$this->json = array(
			'status' => false,
			'message' => false,
			'vat' => false
		);

		// Данные авторизации
		$config = array(
			'uname' => 'web',
			'upass' => 'Be2ooYuqua',
			'url'   => 'http://195.13.182.221:8083/json'
		);
		// Извлекаем данные из POST запроса
		$post = $request->all();

		if(!isset($post['num']) OR !is_numeric($post['num'])){
			$this->json['field'] = 'phone';
			$this->json['message'] = '';
			return response()->json($this->json);
		}





		$digest = sha1(sha1($config['upass']) . '::ffff:195.13.176.50'); //xomobile
		//$digest = sha1(sha1($config['upass']) . '::ffff:195.13.176.50'); //buben
		//$digest = sha1(sha1($config['upass']) . '::ffff:77.121.69.136');

		//$rpc_client = JSONRPC_Client::factory();

		try{

			// Если нет метода оплаты или выбрано картой то тогда АПИ для sweden bank
			$rpc_data = array(
				"domain" => "Safeum",
				"uname" => $config['uname'],
				"digest" => $digest,
				"inum" => "3712" . $post['num'],
				"amount" => $post['summ'],
				"description" => "payment",
				// Передаем возвращаемый обратно параметр, в нашем случае "язык"
				"context" => $lang
			);

			//$this->json['rpc_data'] = $rpc_data;

			$rpc_response = $this->rpc_request(
				$config['url'],
				'safeum.GetPaymentFormData',
				$rpc_data
			);


		}catch (Exception $e){
			$this->json['status'] = false;
			$this->json['message'] = array($e->getMessage(), $e->getTraceAsString());
			return response()->json($this->json);
		}

		// Если нет ответа от сервера
		if(!isset($rpc_response['result'])){
			$this->json['status'] = false;
			$this->json['message'] = 'payment_server_error';
			return response()->json($this->json);
		}

		// Если ошибка от сервера
		if(!$rpc_response['result']){
			$this->json['status'] = false;
			switch($rpc_response['error']){
				case 'Invalid card in this domain':
					$this->json['field'] = 'phone';
					$this->json['message'] = 'payment_incorrect_phone';
					break;
				default:
					$this->json['message'] = $rpc_response['error'];
			}
			return response()->json($this->json);
		}


		if(!isset($rpc_response['vat'])){
			$this->json['status'] = true;
			$this->json['vat'] = null;
		}else{
			$this->json['vat'] = $rpc_response['vat'];
			$this->json['status'] = true;
		}
		return response()->json($this->json);
	}

	public function get_locale($lang){
		if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) AND ($list = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']))) {
			if (preg_match_all('/([a-z]{1,8}(?:-[a-z]{1,8})?)(?:;q=([0-9.]+))?/', $list, $list)) {
				$user_languages = $list[1];
			}
		} else {
			$user_languages = array();
		}
		$locale = '';
		if(count($user_languages)){
			$parts = explode('-', $user_languages[0]);
			if(count($parts) > 1){
				$locale = $parts[0] . '_' . strtoupper($parts[1]);
			}else{
				switch($parts[0]){
					case 'en':
						$locale = $parts[0] . '_' . 'US';
						break;
					default:
						$locale = $parts[0] . '_' . strtoupper($parts[0]);
				}
			}
		} else {
			switch($lang){
				case 'en':
					$locale = 'en_US';
					break;
				case 'ru':
					$locale = 'ru_RU';
					break;
				default:
					$locale = $lang . '_' . strtoupper($lang);
			}
		}
		return $locale;
	}

	private function rpc_request($url, $method, $data){
		/*$request = Request::create($url, 'POST', array(
			"jsonrpc"	=> "2.0",
			"method"	=> $method,
			"params"	=> $data,
			"id"		=> 1
		));*/

		//$url = Laracurl::buildUrl($url, $data);

		$response = Laracurl::jsonPost($url, array(
			"jsonrpc"	=> "2.0",
			"method"	=> $method,
			"params"	=> $data,
			"id"		=> 1
		));

		//dd($request);
		//$response = Route::dispatch($request);

		//dd($response);
		$body = json_decode($response->body, true);

		return $body['result'];

		//return array(
		//	'result' => false,
		//	'error' => 'Invalid card in this domain'
		//);
	}


}
