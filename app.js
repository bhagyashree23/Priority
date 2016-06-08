var app = angular.module('flapperNews',[]);

  app.controller('MainCtrl',['$scope','$filter','postFactory',function($scope,$filter,postFactory){
	  
   
     $scope.date = new Date();
	
 	
	 $scope.posts = [];
	 $scope.images = [];
	 $scope.events = [];
	 
	 $scope.list = postFactory.list;
	 
	 
	 //Function to retrieve posts.
	 var flag = false;
	 $scope.$watch('date',function(){
		 
		 angular.forEach($scope.list,function(value,index){
			  
				console.log('$scope.date:'+$filter('date')($scope.date, 'MMM-yyyy'));
                if(value.date == $filter('date')($scope.date, 'MMM-yyyy'))
				{
					flag = true;
					console.log('inisde if condition of loop');
					$scope.posts = value.posts;
					$scope.images = value.images;
					$scope.events = value.events;
                }
			}); 
			
		 console.log('flag value:'+flag);	
	     if(flag == false)
		 {
			 $scope.posts = [];
			 $scope.events = [];
			 $scope.images = [];
		 }
		 else{
			 flag = false;
			 
		 }
		 
	 },true);
	 
	 /*
	 $scope.findPost = function(searchDate){
		 
		angular.forEach($scope.list,function(value,index){
			  
				
                if(value.date == searchDate)
				{
					flag = true;
					console.log('inisde if condition of loop');
					$scope.posts = value.posts;
					$scope.images = value.images;
					$scope.events = value.events;
                }
			}); 
			
		 console.log('flag value:'+flag);	
	     if(flag == false)
		 {
			 $scope.posts = [];
			 $scope.events = [];
			 $scope.images = [];
		 }
		 else{
			 flag = false;
			 
		 }
        
	 };
	 */
	 //Setting posts for current month.
	 
	 //$scope.findPost($filter('date')($scope.date, 'MMM-yyyy'));
	 
	 //Adding new post.
	 
	 $scope.addTask = function(){
		 if(!$scope.title || $scope.title === '') { return; }
	     $scope.posts.push( {title:$scope.title,upvotes:0} );
		 $scope.title = '';
	 };
	 
	 $scope.addEvent = function(){
		 if(!$scope.eventTitle || $scope.eventTitle === '') { return; }
	     $scope.events.push( $scope.eventTitle );
		 $scope.eventTitle = '';
	 };
	 
	 //Upvoting function.
	 $scope.incrementUpvotes = function(post){
		 
		 post.upvotes += 1;
	 };
	 
	 //Getting Previous Month.
	 $scope.preMonth = function(date){
        date.setMonth(date.getMonth() - 1);
        return date;
     }
	 
	 //Getting Next Month.
	 $scope.nextMonth = function(date){
        date.setMonth(date.getMonth() + 1);
        return date;
     }
	 
	 
	 //Controlling Functions Left Right Arrow.
	 $scope.btnPrev = function(){
		
        $scope.date = $scope.preMonth($scope.date);
		//$scope.findPost($filter('date')($scope.date, 'MMM-yyyy'));
		
				 
	 };
	 
	 $scope.btnNext = function(){
		
        		
	    $scope.date = $scope.nextMonth($scope.date);
	    //$scope.findPost($filter('date')($scope.date, 'MMM-yyyy'));
		
			
	 };
	 
  
  }]);

  //Creating Service for the JSON data.
  app.factory('postFactory',function(){
	  
	 var o ={};
	  
	 o.list=[
	              { date:'May-2016',
	                posts:[
	                       {title: 'May Singapore Visa', upvotes: 1},
                           {title: 'May Deposit Money', upvotes: 2},
                           {title: 'May Pay Phone Bill', upvotes: 3}
		                   ],
				     events:[
					        'May Singapore Trip with College Friends.',
					        'May Team Outing at Bangalore Breworks',
							'May Sketched my favorite scientist :-*',
							'May Made new friends at work and I seem to enjoy my work ;)',
							'May Massive tooth ache :( Have to undergo Surgery.',
							'May Missing my best friends bday, wish she was here'
					
					       ],
				    images:['one.jpg',
					        'two.jpeg',
							'three.jpg',
							'four.jpeg',
							'five.jpg',
							'six.jpeg'
					       ]
	             },
	             {  date:'Apr-2016',
	                posts:[
	                       {title: 'Singapore Visa', upvotes: 1},
                           {title: 'Deposit Money', upvotes: 2},
                           {title: 'Pay Phone Bill', upvotes: 3}
		                   ],
				     events:[
					        'april Singapore Trip with College Friends.',
					        'april Team Outing at Bangalore Breworks',
							'april Sketched my favorite scientist :-*',
							'april Made new friends at work and I seem to enjoy my work ;)',
							'april Massive tooth ache :( Have to undergo Surgery.',
							'april Missing my best friends bday, wish she was here'
					
					       ],
				    images:['one.jpg',
					        'two.jpeg',
							'three.jpg',
							'four.jpeg',
							'five.jpg',
							'six.jpeg'
					       ]
	             },
                 {  date:'Mar-2016',
	                posts:[
	                       {title: 'Give AppBuilder Exam', upvotes: 1},
                           {title: 'Learn Angular', upvotes: 2},
                           {title: 'Veni Vidi Vici', upvotes: 3}
		                   ],
						   
				    events:[
					        'Singapore Trip with College Friends.',
					        'Team Outing at Bangalore Breworks',
							'Sketched my favorite scientist :-*',
							'Made new friends at work and I seem to enjoy my work ;)',
							'Massive tooth ache :( Have to undergo Surgery.',
							'Missing my best friends bday, wish she was here'
					
					       ],
			        images:['one.jpg',
					        'two.jpeg',
							'three.jpg',
							'four.jpeg',
							'five.jpg',
							'six.jpeg'
					       ]
	             }
	 ]; 
	  
	  console.log('inside factory:'+o.list);
	  return o;
	  
  });