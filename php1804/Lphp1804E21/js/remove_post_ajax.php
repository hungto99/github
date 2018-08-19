<?php
if($_SEVER['REQUEST_METHOR']=='POST')
{
	$id = $_POST['postId'];

	$query = "select * from posts
		where id = $id
	";

	$queryData = $connection->prepare($query);
	if($queryData->execute()){
		$queryRemove = "
			delete from posts where id=$id
		";
		$queryRemoveData = $connection->prepare($queryRemove);
		$status = $queryRemoveData->execute()? "success" : "fail";
		echo json_encode(['status' => $status, 'data' => $id]);
	}
}
?>