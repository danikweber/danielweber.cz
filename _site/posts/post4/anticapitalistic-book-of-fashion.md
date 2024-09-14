---
layout: layout/post.html
title: the anticapitalistic book of fashion
tags: 
    - knihy
    - móda
    - udržitelnost
image: /posts/post4/the-anticapitalist-book-of-fashion.png
imageAlt: kniha anticapitalistic book of fashion

uvod: "Kniha podle mě nabízí neobvykle radikální pohled na módní průmysl. Nebojí se jít ke kořenům problémů a pojmenovat je jako: rasismus, kolonialismus, kapitalismus… Nahlíží na módu skrze třídní boj a vykořisťování a nezastavuje se u polovičních řešení, jaké jsou často propagovány liberálními médii a autory. Kniha se věnuje takřka každému aspektu, od vykořisťování šiček na globálním jihu a jeho historii, přes trendy, online nákupy, modeling, velké designéry, přístupy původních obyvatel k módě až po možná řešení. Pokud byste si měli přečíst jednu knihu, která nabízí alternativní pohled na módní průmysl, který neglorifikuje velká jména, estetiku a úspěch nad vše ostatní, tak je to právě tahle."
---
# výpisky na platformě Are.na

[→are.na/book - the anti capitalistic book of fashion (excerpts)](https://www.are.na/daniel-weber-ybsgvbdwtz4/book-the-anti-capitalistic-book-of-fashion-excerpts)

<div id="content-collection"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
    const ARENA_API_URL = 'https://api.are.na/v2/channels/book-the-anti-capitalistic-book-of-fashion-excerpts?per=30&page=1';
    
    axios.get(ARENA_API_URL)
        .then(response => {
            console.log(response.data);  // Check the API response
            displayContent(response.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function displayContent(data) {
        const contentContainer = document.getElementById('content-collection');
        const blocks = data.contents;  // Based on Are.na API structure

        blocks.forEach(block => {
            const blockElement = document.createElement('div'); // Create a container for each block

            // Add a class to the block element
            blockElement.className = `block-${block.class.toLowerCase()}`;

            // Check block type and handle accordingly
            if (block.class === 'Image') {
                // Handle image block
                const imgElement = document.createElement('img');
                imgElement.className = `arena`;
                imgElement.src = block.image.display.url;
                imgElement.alt = block.title || "Image from Are.na collection";
                blockElement.appendChild(imgElement);
            } else if (block.class === 'Text') {
                // Handle text block
                const textElement = document.createElement('p');
                textElement.textContent = block.content;
                blockElement.appendChild(textElement);
            } else if (block.class === 'Link') {
                // Handle link block
                const linkElement = document.createElement('a');
                linkElement.href = block.source.url;
                linkElement.textContent = block.title || block.source.url;
                blockElement.appendChild(linkElement);
            }

            contentContainer.appendChild(blockElement);
        });
    }
</script>

