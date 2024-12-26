<?php

namespace App\Http\Controllers;

use App\Models\ESportsOfficer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ESportsOfficerController extends Controller
{
    // Get All Data
    public function index() {
        $requestData = ESportsOfficer::all();

        return Inertia::render('Admin/ESports/Official', [
            'requestData' => $requestData,
        ]);
    }
    

    // Create Data
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
        
        ESportsOfficer::create([
            'fullName' => $requestData['fullName'],
            'position' => $requestData['position'],
            'imageLink' => $create_image_name,
        ]);

        return to_route('e-sports-officer');
    }

    // Update Data
    public function update(Request $request) 
    {
        $requestData = $request->all();

        if (!is_null($requestData['image']))
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

            ESportsOfficer::where('id', $requestData['id'])
                ->first()
                ->update([
                    "fullName" => $requestData['fullName'],
                    "position" => $requestData['position'],
                    "imageLink" => $create_image_name,
                ]);
        } else {
            ESportsOfficer::where('id', $requestData['id'])
                ->first()
                ->update([
                    "fullName" => $requestData['fullName'],
                    "position" => $requestData['position'],
                ]);
        }

        return to_route('e-sports-officer');
    }

    // Destroy Data
    public function destroy(Request $request)
    {
        $requestData = $request->all();

        ESportsOfficer::where('id', $requestData['id'])->delete();

        return to_route('e-sports-officer');
    }
}
