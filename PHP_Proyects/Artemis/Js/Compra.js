/**IMPRIMIR FACTURA  */
function imprim1(imprimir){
	document.title='Artemis.pdf';
  var pdf = document.getElementById('imprimir').innerHTML;
  var w = window.open('', 'PRINT', 'height=792,width=612');
	   w.document.write('</head><header class="header bar"> <img src="sources/Version_Impresa.png" width="100%" height="210"> </head> <body >');
	   w.document.write('<h1> Nueva Factura</h1>');
		  w.document.write(pdf);
		  w.document.write('<footer class="footer"><img src="sources/Version_Impresa2.png" width="100%" height="50"></footer>  </body></html>');
		  w.document.close(); 
				 w.focus();
						 w.print();
		  w.close();
		  return true;}
		  
