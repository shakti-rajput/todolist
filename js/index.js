$( document ).ready(function(){
	var $newTaskInput = $('#newTaskInput');
	var $taskList = $('#taskList');
	var taskTouchStart;
	var taskTouchEnd;
	var taskTouchStartX;
	var taskTouchEndX;
	
	$('#addNewTask').on('click', function(){
		var key = Date.now();
		var newTask = '<li data-key="' + key + '"><span>' + $newTaskInput.val() + '</span></li>';
		$taskList.append( newTask);
		$newTaskInput.val('');
	});
	
	$taskList.on('touchstart', 'li', function(e){
		var start = document.elementFromPoint( e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY );
		taskTouchStart = $(start).attr('data-key');
		taskTouchStartX = e.originalEvent.touches[0].pageX;
	});
	
	$taskList.on('touchend', 'li', function(e){
		var $end;
		var $this =$(this);
		var end = document.elementFromPoint( e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY );
		$end = $(end);
		taskTouchEnd = $end.attr('data-key');
		taskTouchEndX = e.originalEvent.touches[0].pageX;
		if(taskTouchStart == taskTouchEnd)
		{
			if(taskTouchStartX < taskTouchEndX)
			{
				if($this.hasClass('done'))
				{
					$this.removeClass('done');
				}
				else
				{
					$this.addClass('done');
				}
				
			}
			else
			{
				$end.remove();
			}
		
		}
	});	
	
});