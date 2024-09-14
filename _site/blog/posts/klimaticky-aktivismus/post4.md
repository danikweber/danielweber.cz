---
layout: layout/post.html
title: the anticapitalistic book of fashion
tags: 
    - knihy
    - móda
    - udržitelnost
image: /blog/posts/post4/original_e577e44bf896ae7b1e1392cc3eded648.jpg
imageAlt: test image

uvod: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
---

## heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


<h1>Are.na</h1>

<div id="image-collection" class="image-collection"></div>

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

