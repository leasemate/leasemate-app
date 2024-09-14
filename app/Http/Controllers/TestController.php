<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\StreamedResponse;

class TestController extends Controller
{
    public function index()
    {

        //        $client = new Client(['base_url' => 'https://api.coze.com']);
        //
        //        $request = $client->request(
        //            'POST',
        //            '/v3/chat',
        //            [
        //                'headers' => [
        //                    'Accept' => 'application/json',
        //                    'Authorization' => 'Bearer pat_qnHR5TUIexH2gL8TlY53vOzinexr5cRzWPCn2PLirzAfLUHnC6R0Ky7UwC7nTta7',
        ////                    'Content-Type' => 'text/event-stream',
        //                    'Content-Type' => 'application/json',
        ////                    'Cache-Control' => 'no-cache',
        ////                    'Connection' => 'keep-alive',
        //                ],
        //                'json' => [
        //                    'conversation_id' => '1',
        //                    'bot_id' => '7407281908582957061',
        //                    'user_id' => '1',
        //                    'additional_messages' => [
        //                        [
        //                            'role' => 'user',
        //                            'content' => 'hello, tell me a story',
        //                            'content_type' => 'text',
        //                        ]
        //                    ],
        //                    'auto_save_history' => false,
        //                    'stream' => true,
        //                ],
        //            ]
        //        );

        //        $request->getEmitter()->on(
        //            'before',
        //            function (BeforeEvent $e, $name) {
        //                echo $name . "\n";
        //                // "before"
        //                echo $e->getRequest()->getMethod() . "\n";
        //                // "GET" / "POST" / "PUT" / etc.
        //                echo get_class($e->getClient());
        //                // "GuzzleHttp\Client"
        //            }
        //        );
        //        dd($request);
        //        dd($client->request());

        return Inertia::render('Test');
    }


    public function stream(): StreamedResponse
    {
        set_time_limit(0);



        $response =  new StreamedResponse(function () {

            ob_start();

            while (true) {
                // Your server-side logic to get data
                $data = json_encode(['message' => 'This is a message']);

                echo "event: message\n";
                echo "data: $data\n\n";
                //                Log::info($data);
                // Flush the output buffer
                ob_flush();
                //                flush();
                //                ob_end_flush();

                // Delay for 1 second
                sleep(2);

                if (connection_aborted()) {
                    break;
                }
            }
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache, must-revalidate');
        $response->headers->set('Connection', 'keep-alive');
        return $response;
        //        , 200, [
        //            'Content-Type' => 'text/event-stream',
        //            'Cache-Control' => 'no-cache, must-revalidate',
        //            'Connection' => 'keep-alive',
        //        ]);

        //        Log::info('stream');
        //
        //
        //        // Create a StreamedResponse that streams the API's response to the client
        //        $res = new StreamedResponse(function () {
        //
        //            $client = new Client();
        //
        //            Log::info('client');
        //
        //            $client = new Client(['base_url' => 'https://api.coze.com']);
        //            $request = $client->request(
        //                'POST',
        //                '/v3/chat',
        //                [
        //                    'headers' => [
        //                        'Accept' => 'application/json',
        //                        'Authorization' => 'Bearer pat_qnHR5TUIexH2gL8TlY53vOzinexr5cRzWPCn2PLirzAfLUHnC6R0Ky7UwC7nTta7',
        ////                    'Content-Type' => 'text/event-stream',
        //                        'Content-Type' => 'application/json',
        ////                    'Cache-Control' => 'no-cache',
        ////                    'Connection' => 'keep-alive',
        //                    ],
        //                    'json' => [
        //                        'conversation_id' => '1',
        //                        'bot_id' => '7407281908582957061',
        //                        'user_id' => '1',
        //                        'additional_messages' => [
        //                            [
        //                                'role' => 'user',
        //                                'content' => 'hello, tell me a story',
        //                                'content_type' => 'text',
        //                            ]
        //                        ],
        //                        'auto_save_history' => false,
        //                        'stream' => true,
        //                    ],
        //                ]
        //            );
        //
        //            $request->getEmitter()->on(
        //                'before',
        //                function (BeforeEvent $e, $name) {
        //                    echo $name . "\n";
        //                    // "before"
        //                    echo $e->getRequest()->getMethod() . "\n";
        //                    // "GET" / "POST" / "PUT" / etc.
        //                    echo get_class($e->getClient());
        //                    // "GuzzleHttp\Client"
        //                }
        //            );
        //
        //            // Make the request to the external API
        //            //            $apiResponse = $client->request('post', 'https://api.coze.com/v3/chat', [
        //            //                'headers' => [
        //            //                    'Accept' => 'application/json',
        //            //                    'Authorization' => 'Bearer pat_qnHR5TUIexH2gL8TlY53vOzinexr5cRzWPCn2PLirzAfLUHnC6R0Ky7UwC7nTta7',
        //            ////                    'Content-Type' => 'text/event-stream',
        //            //                    'Content-Type' => 'application/json',
        //            ////                    'Cache-Control' => 'no-cache',
        //            ////                    'Connection' => 'keep-alive',
        //            //                ],
        //            //                'json' => [
        //            //                    'conversation_id' => '1',
        //            //                    'bot_id' => '7407281908582957061',
        //            //                    'user_id' => '1',
        //            //                    'additional_messages' => [
        //            //                        [
        //            //                            'role' => 'user',
        //            //                            'content' => 'hello, tell me a story',
        //            //                            'content_type' => 'text',
        //            //                        ]
        //            //                    ],
        //            //                    'auto_save_history' => false,
        //            //                    'stream' => true,
        //            //                ],
        //            //                'stream' => true,
        //            //            ]);
        //            //
        //            //            //            dd($apiResponse->);
        //            //            //            Log::info('API response: ' . $apiResponse->getBody());
        //            //
        //            //            // Get the stream body
        //            //            $body = $apiResponse->getBody();
        //            //
        //            //            //            Log::info($body);
        //            //
        //            //            // While there is data in the stream, read and echo it
        //            //            while (!$body->eof()) {
        //            //                echo $body->read(1024); // Read 1KB chunks
        //            //                ob_flush(); // Flush the output buffer
        //            //                flush();    // Flush the system output buffer
        //            //            }
        //        }, 200, [
        //            'Content-Type' => 'text/event-stream',
        //            'Cache-Control' => 'no-cache',
        //            'Connection' => 'keep-alive',
        //        ]);
        //        return $res;
        //        $response = new StreamedResponse(function () {
        //            while (true) {
        //                echo "data: " . json_encode(['message' => 'Hello from Laravel']) . "\n\n";
        //                ob_flush();
        //                flush();
        //
        //                // Sleep for some time to simulate server updates
        //                sleep(1);
        //            }
        //        });
        //
        //        $response->headers->set('Content-Type', 'text/event-stream');
        //        $response->headers->set('Cache-Control', 'no-cache');
        //        $response->headers->set('Connection', 'keep-alive');
        //
        //        return $response;

    }
}
