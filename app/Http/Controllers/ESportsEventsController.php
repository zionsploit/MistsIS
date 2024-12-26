<?php

namespace App\Http\Controllers;

use App\Models\ESportsEvents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ESportsEventsController extends Controller
{
    // Index
    public function index() {
        $requestData = ESportsEvents::all();

        return Inertia::render('Admin/ESports/Events', [
            'requestData' => $requestData,
        ]);
    }

    //Creating a new ESportsEvents
    public function create(Request $request)
    {
        $requestData = $request->all();

        // GET IMAGES INFO
        $get_image_content = explode(',', $requestData['image']['content']);
        $get_image_name_content = explode('.', $requestData['image']['name']);

        // GET LAST ELEMENT
        $lastElement = end($get_image_name_content);
        $lastElement = current($get_image_name_content);

        $create_image_name = strval(time()) . '.' . $lastElement;


        // CREATE FILE TO MOVE
        Storage::disk('public')->put($create_image_name, base64_decode($get_image_content[1]));

        ESportsEvents::create([
            "title" => $requestData['title'],
            "description" => $requestData['description'],
            "date" => $requestData['date'],
            "imageLink" => $create_image_name,
        ]);

        return to_route('e-sports-events');
    }

    // Update Data
    public function update(Request $request)
    {
        $requestData = $request->all();

        if (!is_null(($requestData['image'])))
        {
            // GET IMAGES INFO
            $get_image_content = explode(',', $requestData['image']['content']);
            $get_image_name_content = explode('.', $requestData['image']['name']);

            // GET LAST ELEMENT
            $lastElement = end($get_image_name_content);
            $lastElement = current($get_image_name_content);

            $create_image_name = strval(time()) . '.' . $lastElement;


            // CREATE FILE TO MOVE
            Storage::disk('public')->put($create_image_name, base64_decode($get_image_content[1]));
                
            ESportsEvents::where('id', $requestData['id'])
                ->first()
                ->update([
                    "title" => $requestData['title'],
                    "description" => $requestData['description'],
                    "date" => $requestData['date'],
                    "imageLink" => $create_image_name,
                ]);
        } else {
            ESportsEvents::where('id', $requestData['id'])
                ->first()
                ->update([
                    "title" => $requestData['title'],
                    "description" => $requestData['description'],
                    "date" => $requestData['date'],
                ]);
        }

        return to_route('e-sports-events');
    }

    // Remove Data
    public function destroy(Request $request) 
    {
        $requestData = $request->all();
        ESportsEvents::where('id', $requestData['id'])->delete();

        return to_route('e-sports-events');
    }


    // GET RESPONSE ARRAY
    public function getEvent()
    {
        $requestData = ESportsEvents::all();

        return response()->json($requestData);
    }
}
