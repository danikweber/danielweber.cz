---
layout: layout/post.html
title: "research: (ne)udržitelnost v módě"
tags: 
    - research
    - móda
    - udržitelnost
image: /prispevek/post6/(ne)udrzitelnost-v-mode.png
imageAlt: (ne)udržitelnost v módě

uvod: Zajímají mě témata oděvu, kritiky módního průmyslu a alternativních přístupů k produkci oblečení. Tento výzkum se zaměřuje nejen na kritiku současného systému (včetně současných pokusů o “udržitelnou módu”, které jsou často zcela neadekvátní odpovědí na průmysl, který je prohnilý od základních principů), ale i na přístupy původních obyvatel, nových i starých technologií a zodpovědného a demokratického designu.

---

# dlouhodobý research na platformě Are.na

[→are.na/book - learning about - (un)sustainability in fashion](https://www.are.na/daniel-weber-ybsgvbdwtz4/learning-about-un-sustainability-in-fashion)

<div id="content-collection"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
    const ARENA_API_URL = 'https://api.are.na/v2/channels/learning-about-un-sustainability-in-fashion?per=50&page=1';
    
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
                const linkUrl = block.source.url;

                if (block.image && block.image.display && block.image.display.url) {
                    // Create a clickable image with alt text
                    const linkElement = document.createElement('a');
                    linkElement.href = linkUrl;
                    linkElement.target = "_blank"; // Open link in a new tab

                    const imgElement = document.createElement('img');
                    imgElement.src = block.image.display.url;
                    imgElement.className = `arena__link`;
                    imgElement.alt = block.title || "Image for link from Are.na";
                    imgElement.style.maxWidth = '100%'; // Optional: Adjust the size of the image

                    const altTextElement = document.createElement('p');
                    altTextElement.textContent = block.title || "No description available";
                    altTextElement.className = `arena__link`;

                    linkElement.appendChild(imgElement);
                    blockElement.appendChild(linkElement);
                    blockElement.appendChild(altTextElement);
                } else {
                    // Fallback: Display the link as an anchor if no image is available
                    const linkElement = document.createElement('a');
                    linkElement.href = linkUrl;
                    linkElement.textContent = block.title || linkUrl;
                    linkElement.target = "_blank"; // Open link in a new tab
                    blockElement.appendChild(linkElement);
                }
            }

            contentContainer.appendChild(blockElement);
        });
    }
</script>

