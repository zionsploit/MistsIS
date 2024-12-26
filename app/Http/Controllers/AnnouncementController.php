<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    // GET ALL DATA
    public function index()
    {
        $requestData = Announcement::all();

        return Inertia::render('Admin/Announcement', [
            'requestData' => $requestData
        ]);
    }

    // CREATE DATA
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
    
        Announcement::create([
            "title" => $requestData['title'],
            "description" => $requestData['description'],
            "date" => $requestData['date'],
            "imageLink" => $create_image_name
        ]);

        return to_route('announcement');
    }

    // DESTROY DATA
    public function destroy(Request $request)
    {
        $requestData = $request->all();
        Announcement::where('id', $requestData['id'])->delete();

        return to_route('announcement');
    }

    // UPDATE DATA
    public function update(Request $request)
    {
        $requestData = $request->all();

        if (!is_null($requestData['image']))
        {
            // GET IMAGES INFO
            $get_image_content = explode(',', $requestData['image']['content']);
            $get_image_name_content = explode(',', $requestData['image']['name']);

            // GET LAST ELEMENT
            $lastElement = end($get_image_name_content);
            $lastElement = current($get_image_name_content);

            $create_image_name = strval(time()) . '.' . $lastElement;

            // CREATE FILE TO MOVE
            Storage::disk('public')->put($create_image_name, base64_decode($get_image_content[1]));

            Announcement::where('id', $requestData['id'])
                ->first()
                ->update([
                    "title" => $requestData['title'],
                    "description" => $requestData['description'],
                    "date" => $requestData['date'],
                    "imageLink" => $create_image_name
                ]);
        } else {
            Announcement::where('id', $requestData['id'])
                ->first()
                ->update([
                    "title" => $requestData['title'],
                    "description" => $requestData['description'],
                    "date" => $requestData['date'],
                ]);
        }

        return to_route('announcement');
    }

    public function getAnnouncement()
    {
        $requestData = Announcement::all();

        return response()->json($requestData);
    }
}
