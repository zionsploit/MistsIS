<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSocioCulturalRequest;
use App\Models\SocioCultural;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SocioCulturalController extends Controller
{

    // GET EVENTS
    public function getAllEvents() {
        $requestData = SocioCultural::all()->where('type', 'events');

        return Inertia::render('Admin/SocioCultural/Events', [
            'requestData' => $requestData,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $input = $request->all();

        // GET IMAGES INFO
        $get_image_content = explode(',', $input['image']['content']);
        $get_image_name_content = explode('.', $input['image']['name']);

        // GET LAST ELEMENT
        $lastElement = end($get_image_name_content);
        $lastElement = current($get_image_name_content);

        $create_image_name = strval(time()) . '.' . $lastElement;


        // CREATE FILE TO MOVE
        Storage::disk('public')->put($create_image_name, base64_decode($get_image_content[1]));

        $createData = SocioCultural::create([
            "title" => $input['title'],
            "description" => $input['description'],
            "date" => $input['date'],
            "type" => $input['type'],
            "imageLink" => $create_image_name,
        ]);

        return Inertia::render('Admin/SocioCultural/Events', [
            'socioEvents' => $createData
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSocioCulturalRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SocioCultural $socioCultural)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SocioCultural $socioCultural)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $requestData = $request->all();

        if (!is_null($requestData['image'])) {

            // GET IMAGES INFO
            $get_image_content = explode(',', $requestData['image']['content']);
            $get_image_name_content = explode('.', $requestData['image']['name']);
    
            // GET LAST ELEMENT
            $lastElement = end($get_image_name_content);
            $lastElement = current($get_image_name_content);
    
            $create_image_name = strval(time()) . '.' . $lastElement;
    
    
            // CREATE FILE TO MOVE
            Storage::disk('public')->put($create_image_name, base64_decode($get_image_content[1])); 

            SocioCultural::where('id', $requestData['id'])
                ->first()
                ->update([
                    "title" => $requestData['title'],
                    "description" => $requestData['description'],
                    "date" => $requestData['date'],
                    "imageLink" => $create_image_name,
                ]);

            return to_route('socio-events');
        }

        SocioCultural::where('id', $requestData['id'])
            ->first()
            ->update([
                "title" => $requestData['title'],
                "description" => $requestData['description'],
                "date" => $requestData['date'],
            ]);

        return to_route('socio-events');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $requestData = $request->all();
        
        SocioCultural::where('id', $requestData['id'])->delete();

        return to_route('socio-events');
    }

    // GET RESPONSE ARRAY
    public function getEvent()
    {
        $requestData = SocioCultural::all();

        return response()->json($requestData);
    }
}
