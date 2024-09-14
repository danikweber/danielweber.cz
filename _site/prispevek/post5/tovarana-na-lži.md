---
layout: layout/post.html
title: "továrna na lži"
tags: 
    - knihy
    - aktivismus
    - klimatická změna
image: /prispevek/post5/tovarna-na-lži.png
imageAlt: kniha tovarna na lži 

uvod: Když jsem zjistil asi půl roku zpátky, že existuje názorový proud, který zcela popírá klimatickou změnu a že se jedná o poměrně populární rétoriku především u krajně pravicových “myslitelů”, tak jsem byl dost v šoku. Moje bublina praskla. Vždycky jsem si myslel, že je to něco co je prostě fakt. A to že samozřejmě naše společnost nereaguje adekvátně je prostě jen neschopnost politiků. Tahle kniha si mě našla asi řekl bych ve správný čas, protože se věnuje právě tématu klimatických dezinformací.
---

Kniha velmi šikovně popisuje, jak se dá vznik klima-popiračů vystopovat až k fosilnímu průmyslu, který má přes 50 let k dispozici data, která ukazují, že další uvolňování skleníkových plynů bude mít katastrofické následky. Vojtěch pecka tady podle mě fakt dobře vyvrací veškeré mýty o klimatické změně a dobře přirovnává fosilní průmysl k tomu tabákovému, který také dlouhá léta bojoval proti zákazům kouření ve veřejném prostoru a šířil dezinformace ohledně vlivu cigaret na vznik rakoviny. 
Myslím si, že pochopit proč jsme v situaci ve které jsme, jak je možné, že se nám nepodařilo se s globálním oteplováním už dávno vypořádat je dost důležitý. Vrací to pozornost na správné místo. Protože i když nebyly klimatické dezinformace a celkově klima-popiračské hnutí na 100 % úspěšně (není dnes už moc lidí, které byste přesvědčili, že rok od roku není teplejší a farmáři přichází o úrodu “náhodou”), tak se minimálně podařilo roztříštit pozornost naší společnosti. I klimatická hnutí mají často různě cíle, nejsou organizované a propojené mezi sebou a často se zabývají podřadnými problémy. Fosilnímu průmyslu se podařilo odvrátit pozornost na “jiné problémy”. 

# výpisky na platformě Are.na

[→are.na/book - továrna na lži (excerpts)](https://www.are.na/daniel-weber-ybsgvbdwtz4/book-tovarna-na-lzi-excerpts)

<div id="content-collection"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
    const ARENA_API_URL = 'https://api.are.na/v2/channels/book-tovarna-na-lzi-excerpts?per=50&page=1';
    
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

