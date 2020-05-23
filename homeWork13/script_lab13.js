function create(arr) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    for (let v = 0; v < arr.length; v++) {
       
        if (Array.isArray(arr[v])) {
       
            var ulInner = document.createElement('ul');
            var liInner = document.createElement('li');
            li.appendChild(ulInner);
            ulInner.appendChild(liInner);
            for (let vInner = 0; vInner < arr[v].length; vInner++) {
                liInner.innerHTML = liInner.innerHTML + " " + arr[v][vInner];
            }
        }
        else {
            li.innerHTML = li.innerHTML + " " + arr[v];

        }

        ul.appendChild(li);
    }
        document.getElementById('app').appendChild(ul);
    }

function creatArr(num1, num2) {
    var arr=[]
    for (var v = 0; v < num1; v++) {
        var arr1=[]
        for (var v1 = 0; v1 < num2; v1++) {
            arr1[v1] = v*num2+v1+1;
        }
        arr[v] = arr1;
    }
    return arr;
}
create(creatArr(10,10));