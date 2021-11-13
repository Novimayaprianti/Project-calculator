function insert(num){
  			document.form.textView.value = document.form.textView.value+num;
  		}
  		function ac(){
  			document.form.textView.value = "";
  		}
  		
  		function backspace(){
  			var x = document.form.textView.value;
  			document.form.textView.value = x.substring(0, x.length-1)
  		}
		  function perc(){
			  var value = document.form.textView.value;
			  value = value / 100;
			  document.form.textView.value = value;
		  }
  		function equal(){
  			var x = document.form.textView.value;
  			if(x == ""){
  				
  			}
  			if(x){

  			document.form.textView.value = eval(x);
  			}
  		}