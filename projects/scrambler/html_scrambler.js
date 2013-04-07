//scrambles all inner HTML of body elements

function scramble(element){
    var children = jQuery.makeArray($(element).children());
    var count = 0;
    while(children.length > 0)
    {
        var child = children.splice(0, 1);

        var htmlContent = $(child).html();
        
        var moreChildren = jQuery.makeArray($(child).children());
        children = children.concat(moreChildren);

        //regular html blocks
        if(moreChildren.length == 0 
            || $(child).is("p")
            || $(child).is("h1")
            || $(child).is("h2")
            || $(child).is("h3")
            || $(child).is("h4")
            || $(child).is("code"))
            $(child).html(scrambleSentence(htmlContent));
    }
}

var scrambleSentence = function(sentence)
{
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789"
    var scrambled = "";


    var inTag = false;

    for(var i = 0; i < sentence.length; i++)
    {
        var currChar = "" + sentence.charAt(i);

        if(currChar == '<')
            inTag = true;
        else if (currChar ==  '>')
        {
            scrambled += currChar;
            inTag = false;
            continue;
        }

        if(inTag)
        {
            scrambled += currChar;
            continue;
        }

        if(currChar == ' ')
            scrambled += " ";
        else if(currChar == currChar.toUpperCase())
            scrambled += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
        else if(!isNaN(currChar * 1))
            scrambled += numbers.charAt(Math.floor(Math.random() * numbers.length))

        else
            scrambled +=  lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }

    return scrambled;
}

var scrambleParagraph = function(paragraph)
{
    //search for spans, put in hash of their locations
    var savedSpans = {};

    var spans = $(paragraph).find('span')
    scrambleSentence(paragraph);
}