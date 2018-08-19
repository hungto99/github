$(document).ready(function(){
	$('.postRemove').on('click',function(){
		$.ajax({
			url: '. ./js/remove_post_ajax.php',//tuong tu action
			type: 'post',//tuong tu nethod
			data: {postId: $(this).attr('postId')},//	
			dataType:'json',
			beforeSend: function(){

			},
			success: function(response){
				if(response.status == 'success'){
					$('tr[postId=post-'+response.data + ']')
				}
			},
			error: function(error){
				console.log(error.responseText);
			},
			complete: function(){

			}
		});
	});
});