<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>MoDaKaSha Dictionary</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="trie.js"></script>
</head>
<body onload="show_word_list()">
    <div class = "header">
        <h1><span style="color: red; padding:3px;">ম দ ক স </span> Dictionary</h1>
    </div>

       <div class="wrapper">
           <div class="words">
               <input onkeyup="show_word_list()" type="text" id="search" placeholder="search..." class = "input">
                <button onclick="search()">Go</button>
                <input type="text" id="en" placeholder="Word" class = "input">
                <input type="text" id="bn" placeholder="Meaning" class = "input">

                <button onclick="add()">Add</button>

                <ul id ="word_list">
                <div id="wordlist">
                    
                </div>
                </ul>

           </div>
           
           
           <div class="word">
               
                <h3 id="word_eng">English</h3>
                <br/>

                <h3 id="word_bang">Meaning</h3>
                <p id = "definition"></p>


                <!-- <h3>Related Words: </h3> -->
                <li id="related"></li>
           </div>
       </div>

    <div class = "footer">
        <h1>&copy; <?php echo date("Y") ?> <span style="padding: 5px">ম দ ক স<span></h1>
    </div>
       
</body>
</html>



