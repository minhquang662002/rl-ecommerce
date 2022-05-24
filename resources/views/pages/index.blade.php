<form action="{{route('postMessage')}}" method="post">
    @csrf
     <input type="hidden" id="title" name="title" value="123">
            <div class="col-sm-12 d-flex" data-name="mail-send" data-code="f194">
             <textarea class="messages__reply__text" placeholder="Type a message..."
                                             name="content"></textarea>
             <button type="submit" class="float-right" style="background: none;border: none;width: 80px;cursor: pointer;">
               <span><i class="zmdi zmdi-mail-send zmdi-hc-fw" style="font-size: 1.7rem;vertical-align: bottom;color: white;float: right;"></i></span>
              </button>
     </div>
</form>
 <a href="#" class="listview__item">
        <img src="demo/img/profile-pics/1.jpg" class="listview__img" alt="">

          <div class="listview__content" id="test_message">
           <div class="listview__heading">David Belle</div>
           </div>
 </a>

@section('script')
    <script>
        var channel = window.Echo.channel('my-channel');
        channel.listen('.my-event', function(data) {
            $('#test_message').append('<p>'+data.message.content+'</p>')
        });
    </script>
@endsection