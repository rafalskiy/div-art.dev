@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{$product->name}}</h1>
        {{$product->price}}
    </div>
@endsection