# Office Hours

## Description
**Office Hours** is a Startup Weekend EDU project created for tutors to help provide different content to students based on their best learning styles: audio, tactile, and visual. The website version 0.1 is hosted [here](http://officehour.herokuapp.com/).

## Usage

Load the application, and sign in as a user. Then choose your learning style from the tab "New Learning Style". If you wish to take a test, make sure you are a logged in user and choose the tab labelled "Practice".


### Known Issues

Does not play nicely with Firefox and Safari. Load in Chrome for best use. Javascript needs to be loaded by reloading the "New Learning Style" tab.

If you discover any bugs, feel free to create an issue on GitHub fork and
send us a pull request.

## Authors

* Derik Strattan (http://github.com/Derikulous)
* Siwei Kang (https://github.com/ksiwei)
* Drew Sing (https://github.com/eatmorespinach)
* Jonesy A (https://github.com/drjsoundsgood)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Brakeman Report
Rails version: 4.0.0<br>
Brakeman version: 2.2.0<br>
Started at 2013-12-09 17:11:40 -0800<br>
Duration: 2.31839 seconds<br>
Checks run: BasicAuth, ContentTag, CrossSiteScripting, DefaultRoutes, Deserialize, DetailedExceptions, DigestDoS, EscapeFunction, Evaluation, Execute, FileAccess, FilterSkipping, ForgerySetting, JRubyXML, JSONParsing, LinkTo, LinkToHref, MailTo, MassAssignment, ModelAttrAccessible, ModelAttributes, ModelSerialize, NestedAttributes, QuoteTableName, Redirect, Render, ResponseSplitting, SQL, SafeBufferManipulation, SanitizeMethods, SelectTag, SelectVulnerability, Send, SendFile, SessionSettings, SingleQuotes, SkipBeforeFilter, StripTags, SymbolDoS, TranslateBug, UnsafeReflection, ValidationRegex, WithoutProtection, YAMLParsing


+SUMMARY+

+-------------------+-------+<br>
| Scanned/Reported  | Total |<br>
+-------------------+-------+<br>
| Controllers       | 10    |<br>
| Models            | 5     |<br>
| Templates         | 60    |<br>
| Errors            | 0     |<br>
| Security Warnings | 0 (0) |<br>
+-------------------+-------+<br>



## License

This project is not licensed for personal use. Please contact one of the authors to learn more.
