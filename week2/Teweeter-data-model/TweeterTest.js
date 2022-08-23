const tweeter = TweeterLogic();
const tweeterRendering = TweeterRender();

tweeter.addPost("This is my own post!");
tweeter.addPost("2 post");
tweeter.addPost("3 post");
tweeter.addPost("4 post");
tweeter.addPost("5 post");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "im a comment");
tweeter.addComment("p1", "biiiii");
tweeter.addComment("p4", `אלכסיי ליאונוב היה האדם הראשון בהיסטוריה שביצע הליכת חלל. ב-18 במרץ 1965 יצא אל מחוץ לחללית ווסחוד 2 לריחוף שנמשך 23 דקות ו-41 שניות. המשימה תוכננה ל-12 דקות בלבד, אבל לחץ האוויר בחליפת החלל שלו ניפח אותה והוא לא הצליח להיכנס חזרה דרך הפתח. רק לאחר שחרור אוויר לחלל הצליח ליאונוב להידחק חזרה לחללית. בחזרה לכדור הארץ, ארעה תקלה במערכת ההנחיה האוטומטית והטייס פאבל בלייב נאלץ לנווט את תא הנחיתה באופן ידני. הצמד נחת כ-1,000 ק"מ מהיעד והם נאלצו לבלות יומיים בקור המקפיא של הרי אוראל עד שחולצו. למעשה, הם שהו בהרים זמן רב יותר מאשר בחלל.`);
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "eiiiii");
tweeter.addComment("p5", "gnldskfnglkdfnglkdnfglkndslkfgnlkdsfngldfskg");
tweeter.addComment("p5", "sadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnnsadfvasannnnnnnnnnnnnnnnnn");
tweeter.addComment("p5", "יקיפדיה היא אנציקלופדיה מקוונת רב-לשונית, המבוססת על תוכן חופשי ומשתמשת בטכנולוגיית ויקי. ויקיפדיה היא האנציקלופדיה הכללית הגדולה והפופולרית ביותר באינטרנט. מאחורי האתר עומדת קרן ויקימדיה, מוסד ללא כוונת רווח שמרכזו בארצות הברית. ");
tweeter.addComment("p5", "eiiiii");
console.log(tweeter.getPosts());

tweeter.removeComment("p1", "c2");
console.log(tweeter.getPosts());


tweeterRendering.renderPosts(tweeter.getPosts())