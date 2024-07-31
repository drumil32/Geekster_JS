const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const grandchild1 = document.querySelector('#grand-child1');
const grandchild2 = document.querySelector('#grand-child2');
const body = document.querySelector('body');

console.log(document);

const handleClickParent = (e) => {
    // e.stopPropagation();
    if (e.target.innerText == "Grand Child 1") {
        alert("child1");
        body.style.backgroundColor = "blue";
    } else if (e.target.innerText == "Grand Child 2") {
        alert("child2");
        body.style.backgroundColor = "red";
    }
    e.stopPropagation();
    // when someone clicks on child1
    // in alert print msg as child1
    // when someone clicks on child2
    // in alert print msg as child2
    // alert("parent clicked")
}

const handleClickChild = () => {
    alert("child clicked")
}

const handleClickGrandchild1 = (e) => {
    alert("grandchild1 clicked");
}

const handleClickGrandchild2 = (e) => {
    alert("grandchild2 clicked");
}

parent.addEventListener('click', handleClickParent, true);
// child.addEventListener('click', handleClickChild, false);
grandchild1.addEventListener('click', handleClickGrandchild1, true);
grandchild2.addEventListener('click', handleClickGrandchild2, true);
