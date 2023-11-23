$(document).ready(function () {    
    var listSave = [];
    var index = 0;
    var point = 0;
    disabled();

    $('.answer').click(function() {
        document.querySelector('.result').style.display = "flex";
        document.querySelector('.save').style.display = "none";

        if(listSave.length > 0)
        {
            $('.save__word').html(listSave[index].replace);
        }
    })

    $('.submit').click(function(){
        var enterWord = $('.input__word').val();
        var wordReplace = replaceWord(enterWord);

        var json =  {
            "key" : enterWord,
            "replace" : wordReplace
        }

        listSave.push(json);
        loadWord();
        $('.input__word').val("");

        console.log(listSave);
    })

    $('.submit__result').click(function() {
        var wordResult = $('.complete__word').val();

        if(wordResult == listSave[index].key)
        {
            point++;
            $('.save__word').html(listSave[index].key);

            listSave.shift();

            document.querySelector('.result').style.display = "none";

            if(listSave.length > 0)
            {
                document.querySelector('.result').style.display = "flex";
                $('.save__word').html(listSave[index].replace);
            }else
            {
                document.querySelector('.save').style.display = "flex";
                $('.save__word').html("");
            }

            $('.complete__word').val("");
        }

        
        console.log(listSave);

        $('.point').html("Điểm số: " + point);
    })

    function replaceWord(word){
        if(word.length > 2)
        {
            for(var i = word.length - 1; i > 0; i--)
            {
                if(i - 3 >= 0)
                {
                    word = word.replace(word[i], "_");
                }
            }
        }

        return word;
    }

    function loadWord(){
        if(listSave.length > 0)
        {
            $('.save__word').html(listSave[index].replace);
        }
    }

    function disabled(){
        if(listSave.length == 0)
        {
            document.querySelector('.result').style.display = "none";
        }else
        {
            document.querySelector('.result').style.display = "flex";
        }
    }
});
