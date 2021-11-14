<script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.0/html2pdf.bundle.min.js" type="text/javascript"></script>

function htmlpdf(){

var element = document.getElementById("print");

var opt = {

margin: [10,20,10,20],

pagebreak: {mode: 'legacy'},

};

html2pdf(element, opt);

}


</script>
