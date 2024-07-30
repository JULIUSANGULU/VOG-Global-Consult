<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return view('admin.blogs.index', compact('blogs'));
    }

    public function create()
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $data = $request->all();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/images');
            $data['image'] = $path;
        }

        Blog::create($data);

        return redirect()->route('admin.blogs.index')
        ->with('success', 'Blog created successfully.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $blog = Blog::find($id);
        $data = $request->all();

        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::delete($blog->image);
            }
            $path = $request->file('image')->store('public/images');
            $data['image'] = $path;
        }

        $blog->update($data);

        return redirect()->route('admin.blogs.index')
        ->with('success', 'Blog updated successfully.');
    }

    public function show($id)
    {
        $blog = Blog::find($id);
        return view('admin.blogs.show', compact('blog'));
    }

    public function edit($id)
    {
        $blog = Blog::find($id);
        return view('admin.blogs.edit', compact('blog'));
    }

 

    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();

        return redirect()->route('admin.blogs.index')
        ->with('success', 'Blog deleted successfully.');
    }
}
