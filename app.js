fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => displayData(json))

        function displayData(posts){
            const Title = posts.map(post => post.title)
            const description = posts.map(posts => posts.body)
            const tableBody = document.getElementById('tab1');

            for(let i=0; i<Title.length; i++){
                const newRow = document.createElement('tr')
                const myPostTitle = Title[i];
                const myTdTitle = document.createElement('td')
                myTdTitle.innerHTML = myPostTitle;
                newRow.appendChild(myTdTitle)
                const dc = description[i];
                    const myTddescription = document.createElement('td');
                    myTddescription.innerHTML = dc;
                    newRow.appendChild(myTddescription)
                tableBody.appendChild(newRow)

            }
          
        }