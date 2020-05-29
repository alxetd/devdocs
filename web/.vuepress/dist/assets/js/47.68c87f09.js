(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{245:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[t._v("#")]),t._v(" Php")]),t._v(" "),a("h2",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters","aria-hidden":"true"}},[t._v("#")]),t._v(" Filters")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Read More")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.php.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.php.net/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.w3schools.com/php",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.w3schools.com/php"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.phptpoint.com/advanced-php-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.phptpoint.com/advanced-php-tutorial/"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("Validating data = Determine if the data is in proper form.")]),t._v(" "),a("p",[t._v("Sanitizing data = Remove any illegal character from the data.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Php\tphp-config\tphp\t\nPhp\tphp-config --extension-dir\tphp\t\n\tphp -v\tphp\t\n\tphp -S localhost:4000\t\t\n\tphp -S localhost:8000 -c app/config/php.ini\t\t\n\t\t\t\nxDebug\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Check XDebug on machine:\nphp -i |grep xdebug"')]),t._v("\t\t\nxDebug\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VirtualHost settings:\nphp_value xdebug.remote_connect_back 1\nphp_value xdebug.remote_enable 1\nphp_value xdebug.var_display_max_depth 8\nphp_value xdebug.autostart 1"')]),t._v("\t\t\nxDebug\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Command line debug:\nexport XDEBUG_CONFIG="')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idekey=ET5_MKTP_RO remote_host='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSH_CLIENT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%%")]),t._v(" *}")]),t._v(' remote_enable=1"')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\nphp /home/eduard.trandafir/et5/et5.mktp-ro/htdocs/../app/console rabbitmq:consumer -w mktp.qevent.low\n\nexport XDEBUG_CONFIG="')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idekey=SB1_MKTP40 remote_host='),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSH_CLIENT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%%")]),t._v(" *}")]),t._v(' remote_enable=1"')]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\nmktp40: php /home/stefan.boila/sb1/sb1.mktp-ro/release-45b19b1783518578bcf266c9fabb905e088b0e03_20150514115524/src/Mktp/QEventBundle/Command/../../../../app/console rabbitmq:consumer -w mktp.qevent.low"')]),t._v("\t\t\nxDebug\tphp /home/eduard.trandafir/et5/et5.mktp-ro/htdocs/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/app/console rabbitmq:consumer -w mktp.qevent.low -m "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\nGearman\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart gearmand.service\t\t\nGearman\tsystemctl status gearmand\t\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h3",{attrs:{id:"php-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-functions","aria-hidden":"true"}},[t._v("#")]),t._v(" php functions")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlencode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("urldecode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlentities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html_entity_decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlspecialchars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlspecialchars_decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strip_tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preg_replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[t._v("#")]),t._v(" Security")]),t._v(" "),a("h3",{attrs:{id:"xss-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-attacks","aria-hidden":"true"}},[t._v("#")]),t._v(" XSS attacks")]),t._v(" "),a("h2",{attrs:{id:"composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[t._v("#")]),t._v(" Composer")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("COMPOSER_MEMORY_LIMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-1 composer require package\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);