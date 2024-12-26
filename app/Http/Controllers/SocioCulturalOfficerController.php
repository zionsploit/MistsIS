<?php

namespace App\Http\Controllers;

use App\Models\SocioCulturalOfficer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SocioCulturalOfficerController extends Controller
{
    //
    public function index() {
        $requestData = SocioCulturalOfficer::all();

        return Inertia::render('Admin/SocioCultural/Officers', [
            'requestData' => $requestData,
        ]);
    }

    // CREATE OFFICER
    public function create(Request $request) {
        $requestData = $request->all();

        // PARSE IMAGES
        $parse_image_content = explode(',', $requestData['image']['content']);
        $get_image_name_content = explode('.', $requestData['image']['name']);
        $decode_parsed_image = base64_decode($parse_image_content[1]);

        // GET LAST ELEMENT
        $lastElement = end($get_image_name_content);
        $lastElement = current($get_image_name_content);

        $create_image_name = strval(time()) . '.' . $lastElement;

        // MOVE IMAGES
        Storage::disk('public')->put($create_image_name, $decode_parsed_image);

        SocioCulturalOfficer::create([
            "fullName" => $requestData['fullName'],
            "position" => $requestData['position'],
            "imageLink" => $create_image_name,
        ]);

        return to_route('socio-officers');
    }

    public function destroy(Request $request) {
        $requestData = $request->all();

        SocioCulturalOfficer::where('id', $requestData['id'])->delete();

        return to_route('socio-officers');
    }

    // Update
    public function update(Request $request)
    {
        $requestData = $request->all();

        if (!is_null($requestData['image'])) {
            // GET IMAGES INFO
            $parse_image_content = explode(',', $requestData['image']['content']);
            $get_image_name_content = explode('.', $requestData['image']['name']);
            $decode_parsed_image = base64_decode($parse_image_content[1]);


            // GET LAST ELEMENT
            $lastElement = end($get_image_name_content);
            $lastElement = current($get_image_name_content);

            $create_image_name = strval(time()) . '.' . $lastElement;

            // MOVE IMAGES
            Storage::disk('public')->put($create_image_name, $decode_parsed_image);
            
            SocioCulturalOfficer::where('id', $requestData['id'])
                ->first()
                ->update([
                    "fullName" => $requestData['fullName'],
                    "position" => $requestData['position'],
                    "imageLink" => $create_image_name,
                ]);
        } else {
            SocioCulturalOfficer::where('id', $requestData['id'])
            ->first()
            ->update([
                "fullName" => $requestData['fullName'],
                "position" => $requestData['position'],
            ]);
        }

        return to_route('socio-officers');
    }
}
