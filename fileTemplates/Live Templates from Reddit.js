<templateSet group="JavaScript">
    <template name="f" value="function (){&#10;    $END$&#10;}" description="function" toReformat="true" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="else" value="else{&#10;    $END$        &#10;}" description="else branch" toReformat="true" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="if" value="if ($aa$) {&#10;    $END$&#10;}" description="if statement" toReformat="true" toShortenFQNames="true">
        <variable name="aa" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="cl" value="console.log(&quot;$END$&quot;);" description="console.log" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="wd" value="var i = $VAR$.length;&#10;while(i--) {&#10;&#9;$END$&#10;}" description="decrementing while loop" toReformat="false" toShortenFQNames="true">
        <variable name="VAR" expression="jsArrayVariable()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="whit" value="var index = $VAR$.length;&#10;while(index--) {&#10;&#9;$VAR$[index]$END$&#10;}" description="while iteration" toReformat="false" toShortenFQNames="true">
        <variable name="VAR" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="d" value="debugger;" description="debugger statement" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="rp" value="return new Promise(function (resolve, reject) {&#10;    $END$        &#10;});" description="return new promise with resolve and reject" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="rq" value="require('$END$')" description="require" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="vr" value="var $a$ = require('$END$');" description="require stored in a variable" toReformat="false" toShortenFQNames="true">
        <variable name="a" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="ife" value="if ($aa$) {&#10;    $END$&#10;}else{&#10;           &#10;}" description="if else statement" toReformat="true" toShortenFQNames="true">
        <variable name="aa" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="ce" value="console.error(&quot;$END$&quot;);" description="console.error" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="fE" value="$arr$.forEach(function ($item$){&#10;    $END$&#10;});" description="forEach loop" toReformat="true" toShortenFQNames="true">
        <variable name="arr" expression="jsArrayVariable()" defaultValue="" alwaysStopAt="true" />
        <variable name="item" expression="jsSuggestVariableName()" defaultValue="item" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name=".fE" value=".forEach(function ($item$){&#10;    $END$&#10;});" description="forEach loop on already written array" toReformat="false" toShortenFQNames="true">
        <variable name="item" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name=".th" value=".then(function($res$){&#10;    $END$&#10;});" description="then" toReformat="false" toShortenFQNames="true">
        <variable name="res" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name=".te" value=".then(function($res$){&#10;    $END$&#10;}, function(err){&#10;    &#10;});" description=".then with error handling" toReformat="false" toShortenFQNames="true">
        <variable name="res" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="r" value="return $END$;" description="return" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="JAVA_SCRIPT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="tc" value="try{&#10;&#9;$END$&#10;}catch(err){&#10;&#9;&#10;}" description="try and catch" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
        </context>
    </template>
    <template name="'+" value="' + $var$ + ' $END$" description="insert variable into single hyphenated string" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
        </context>
    </template>
    <template name="&quot;+" value="&quot; + $var$ + &quot; $END$" description="insert variable into double hyphenated string" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
        </context>
    </template>
    <template name="arr" value="$arrayName$.splice($arrayName$.indexOf($item$), 1);" description="array remove item" toReformat="false" toShortenFQNames="true">
        <variable name="arrayName" expression="jsArrayVariable()" defaultValue="" alwaysStopAt="true" />
        <variable name="item" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
        </context>
    </template>
    <template name="ari" value="$arrayName$.splice($index$, 0, $item$);" description="array insert item" toReformat="false" toShortenFQNames="true">
        <variable name="arrayName" expression="jsArrayVariable()" defaultValue="" alwaysStopAt="true" />
        <variable name="index" expression="jsSuggestIndexName()" defaultValue="" alwaysStopAt="true" />
        <variable name="item" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
        </context>
    </template>
    <template name="wp" value="var item;&#10;while(item = $VAR$.pop()) {&#10;&#9;$END$&#10;}" description="popping while loop" toReformat="false" toShortenFQNames="true">
        <variable name="VAR" expression="jsArrayVariable()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="f1" value="function ($param$){&#10;    $END$&#10;}" description="function with one parameter" toReformat="false" toShortenFQNames="true">
        <variable name="param" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="f2" value="function ($param1$, $param2$){&#10;    $END$&#10;}" description="function with two parameters" toReformat="false" toShortenFQNames="true">
        <variable name="param1" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <variable name="param2" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="st" value="setTimeout(function(){&#10;&#9;$END$&#10;}, $milis$);" description="setTimeout" toReformat="false" toShortenFQNames="true">
        <variable name="milis" expression="" defaultValue="1000" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="fb" value="(function(){&#10;&#9;$END$&#10;});" description="function in brackets" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="va" value="var $variable$ = $END$;" description="var assignment" toReformat="false" toShortenFQNames="true">
        <variable name="variable" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="fcb" value="function(){&#10;&#9;$END$&#10;});" description="function with just closing bracket" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="vf" value="var $varName$ = function(){&#10;&#9;$END$&#10;};" description="function expression" toReformat="false" toShortenFQNames="true">
        <variable name="varName" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="ok" value="Object.keys($var$);" description="Object.keys()" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="ik" value="var keys = Object.keys($object$).reverse();&#10;var key;&#10;while(key = keys.pop()) {&#10;&#9;$END$&#10;}" description="iterate object keys" toReformat="false" toShortenFQNames="true">
        <variable name="object" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="me" value="module.exports" description="module.exports" toReformat="true" toShortenFQNames="true">
        <context>
            <option name="HTML_TEXT" value="false" />
            <option name="HTML" value="false" />
            <option name="XSL_TEXT" value="false" />
            <option name="XML" value="false" />
            <option name="XML_TEXT" value="false" />
            <option name="JSON" value="false" />
            <option name="JSP" value="false" />
            <option name="CSS_PROPERTY_VALUE" value="false" />
            <option name="CSS_DECLARATION_BLOCK" value="false" />
            <option name="CSS_RULESET_LIST" value="false" />
            <option name="CSS" value="false" />
            <option name="CUCUMBER_FEATURE_FILE" value="false" />
            <option name="JAVA_SCRIPT" value="false" />
            <option name="JS_EXPRESSION" value="false" />
            <option name="JS_STATEMENT" value="true" />
            <option name="TypeScript" value="false" />
            <option name="DART" value="false" />
            <option name="HAML" value="false" />
            <option name="JADE" value="false" />
            <option name="CoffeeScript" value="false" />
            <option name="OTHER" value="false" />
        </context>
    </template>
    <template name="w" value="while($war$){&#10;&#9;$END$&#10;}" description="while loop" toReformat="false" toShortenFQNames="true">
        <variable name="war" expression="completeSmart()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="ty" value="typeof $var$" description="typeof" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="js" value="JSON.stringify($var$);" description="JSON.stringify()" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="jp" value="JSON.parse($str$);" description="JSON.parse()" toReformat="false" toShortenFQNames="true">
        <variable name="str" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="$d" value="$q.defer()" description="$q.defer()" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="u" value="undefined" description="undefined" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="v;" value="var $variable$;" description="var declaration" toReformat="false" toShortenFQNames="true">
        <variable name="variable" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="v" value="var " description="var keyword" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="p" value="prototype" description="prototype" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="a" value="arguments" description="arguments" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="[&quot;" value="[&quot;$END$&quot;]" description="array with one string" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="fa" value="false" description="false" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tr" value="true" description="true" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name=".t" value=".then($END$);" description=".then()" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name=".i" value=".indexOf($var$)" description=".indexOf()" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="jsSuggestVariableName()" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="t" value="this" description="this" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name=".i!" value=".indexOf($var$) !== -1" description=".indexOf() !== -1" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="it" value="it('should $exp$', function(){&#10;    $END$;&#10;});" description="it('should ...', function(){})" toReformat="false" toShortenFQNames="true">
        <variable name="exp" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="ita" value="it('should $exp$', function(done){&#10;    $END$;&#10;});" description="it('should ...', function(done){})" toReformat="false" toShortenFQNames="true">
        <variable name="exp" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="{O" value="{Object}" description="{Object}" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="false" />
            <option name="JS_STATEMENT" value="false" />
        </context>
    </template>
    <template name="'f" value="'function" description="'function'" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="'n" value="'number" description="'number'" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="'o" value="'object" description="'object'" toReformat="false" toShortenFQNames="true">
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tyo" value="typeof $var$ === 'object'" description="typeof .. === 'object'" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tynf" value="typeof $war$ !== 'function'" description="typeof .. !== 'function'" toReformat="false" toShortenFQNames="true">
        <variable name="war" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tye" value="typeof $var$ === $END$" description="typeof equal" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tyn" value="typeof $var$ !== $END$" description="typeof not equal" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
    <template name="tyof" value="typeof $var$ === 'function'" description="typeof .. === 'function'" toReformat="false" toShortenFQNames="true">
        <variable name="var" expression="" defaultValue="" alwaysStopAt="true" />
        <context>
            <option name="JAVA_SCRIPT" value="true" />
            <option name="JS_EXPRESSION" value="true" />
            <option name="JS_STATEMENT" value="true" />
        </context>
    </template>
</templateSet>