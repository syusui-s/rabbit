// NORMAL (implicit AND)
// A filter 'hello world' should match 'hello world'
// A filter "Lorem amet" should match "Lorem ipsum dolor sit amet"
//
// AND
//
// A filter "Lorem AND amet" should match "Lorem ipsum dolor sit amet"
//
// CASE
// A filter 'hello world' should match 'HELLO WORLD'
// A filter 'HELLO WORLD' should match 'hello world'
//
// DOUBLEQUOTE
// A filter '"HELLO WORLD"' should match 'HELLO WORLD'
// A filter '"HELLO WORLD"' should not match 'hello world'
