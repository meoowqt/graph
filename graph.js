const nodes = [
    {"id": "Python", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "JavaScript", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Java", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "C++", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "C#", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Ruby", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Go", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Swift", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Kotlin", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "R", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "PHP", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "TypeScript", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Scala", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Haskell", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "Rust", "level": 1, "group": "Языки программирования", "color": "blue"},
    {"id": "TensorFlow", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "PyTorch", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "React", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Angular", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Vue.js", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Django", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Flask", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Spring", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": ".NET", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Node.js", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Laravel", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Express.js", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Hibernate", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Spark", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Pandas", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "NumPy", "level": 2, "group": "Библиотеки", "color": "green"},
    {"id": "Веб-разработка", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Мобильная разработка", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Научные вычисления", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Искусственный интеллект", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Системное программирование", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Игровая разработка", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Бизнес-приложения", "level": 3, "group": "Сферы применения", "color": "yellow"},
    {"id": "Автоматизация", "level": 3, "group": "Сферы применения", "color": "yellow"}
];

const links = [
    {"source": "Python", "target": "Научные вычисления"},
    {"source": "Python", "target": "Искусственный интеллект"},
    {"source": "Python", "target": "Веб-разработка"},
    {"source": "JavaScript", "target": "Веб-разработка"},
    {"source": "JavaScript", "target": "Мобильная разработка"},
    {"source": "Java", "target": "Веб-разработка"},
    {"source": "Java", "target": "Мобильная разработка"},
    {"source": "Java", "target": "Бизнес-приложения"},
    {"source": "C++", "target": "Системное программирование"},
    {"source": "C++", "target": "Игровая разработка"},
    {"source": "C#", "target": "Игровая разработка"},
    {"source": "C#", "target": "Бизнес-приложения"},
    {"source": "Ruby", "target": "Веб-разработка"},
    {"source": "Go", "target": "Системное программирование"},
    {"source": "Go", "target": "Автоматизация"},
    {"source": "Swift", "target": "Мобильная разработка"},
    {"source": "Kotlin", "target": "Мобильная разработка"},
    {"source": "R", "target": "Научные вычисления"},
    {"source": "PHP", "target": "Веб-разработка"},
    {"source": "TypeScript", "target": "Веб-разработка"},
    {"source": "Scala", "target": "Бизнес-приложения"},
    {"source": "Haskell", "target": "Научные вычисления"},
    {"source": "Rust", "target": "Системное программирование"},
    {"source": "TensorFlow", "target": "Искусственный интеллект"},
    {"source": "PyTorch", "target": "Искусственный интеллект"},
    {"source": "React", "target": "Веб-разработка"},
    {"source": "Angular", "target": "Веб-разработка"},
    {"source": "Vue.js", "target": "Веб-разработка"},
    {"source": "Django", "target": "Веб-разработка"},
    {"source": "Flask", "target": "Веб-разработка"},
    {"source": "Spring", "target": "Веб-разработка"},
    {"source": ".NET", "target": "Бизнес-приложения"},
    {"source": "Node.js", "target": "Веб-разработка"},
    {"source": "Node.js", "target": "Автоматизация"},
    {"source": "Laravel", "target": "Веб-разработка"},
    {"source": "Express.js", "target": "Веб-разработка"},
    {"source": "Hibernate", "target": "Бизнес-приложения"},
    {"source": "Spark", "target": "Научные вычисления"},
    {"source": "Pandas", "target": "Научные вычисления"},
    {"source": "NumPy", "target": "Научные вычисления"},
    {"source": "Python", "target": "TensorFlow"},
    {"source": "Python", "target": "PyTorch"},
    {"source": "Python", "target": "Django"},
    {"source": "Python", "target": "Flask"},
    {"source": "Python", "target": "Pandas"},
    {"source": "Python", "target": "NumPy"},
    {"source": "JavaScript", "target": "React"},
    {"source": "JavaScript", "target": "Angular"},
    {"source": "JavaScript", "target": "Vue.js"},
    {"source": "JavaScript", "target": "Node.js"},
    {"source": "JavaScript", "target": "Express.js"},
    {"source": "Java", "target": "Spring"},
    {"source": "Java", "target": "Hibernate"},
    {"source": "C#", "target": ".NET"},
    {"source": "PHP", "target": "Laravel"},
    {"source": "TypeScript", "target": "Angular"},
    {"source": "TypeScript", "target": "React"},
    {"source": "Scala", "target": "Spark"},
    {"source": "R", "target": "Pandas"},
    {"source": "R", "target": "NumPy"}
];
const startNodeList = document.getElementById('startNodeList');
const endNodeList = document.getElementById('endNodeList');
const groupNodeList = document.getElementById('groupNodeList');

const groupedNodes = nodes.reduce((acc, node) => {
    if (!acc[node.group]) {
        acc[node.group] = [];
    }
    acc[node.group].push(node);
    return acc;
}, {});

const uniqueGroups = Object.keys(groupedNodes);

function addNodesWithGroupToList(list, nodeData) {
    const groups = {};

    nodeData.forEach(node => {
        if (!groups[node.group]) {
            groups[node.group] = [];
        }
        groups[node.group].push(node);
    });

    for (const group in groups) {
        const groupHeader = document.createElement('div');
        groupHeader.className = 'group';
        groupHeader.textContent = group;
        list.appendChild(groupHeader);

        groups[group].forEach(node => {
            const option = document.createElement('div');
            option.textContent = node.id;
            option.onclick = () => selectNode(list, node.id);
            list.appendChild(option);
        });
    }
}

addNodesWithGroupToList(startNodeList, nodes);
addNodesWithGroupToList(endNodeList, nodes);

uniqueGroups.forEach(group => {
    const option = document.createElement('div');
    option.textContent = group; 
    option.onclick = () => selectGroup(group); 
    groupNodeList.appendChild(option);
});

function selectNode(list, nodeId) {
    const input = list.previousElementSibling; 
    input.value = nodeId;
    resetDropdowns();
}

function selectGroup(group) {
    document.getElementById('groupNodeSearch').value = group; 
    highlightGroup(group);
    resetDropdowns();
}

function highlightGroup(selectedGroup) {
    resetGraph();

    svg.selectAll(".node")
        .filter(d => d.group === selectedGroup)
        .classed("highlighted-node", true);

    svg.selectAll(".link")
        .filter(d => d.source.group === selectedGroup || d.target.group === selectedGroup)
        .classed("highlighted", true);
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        resetDropdowns();
        dropdown.style.display = 'block';
    }
}

function resetDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-list');
    dropdowns.forEach(dropdown => dropdown.style.display = 'none');
}

function filterOptions(dropdownId, searchId) {
    const dropdownElement = document.getElementById(dropdownId);
    const searchValue = document.getElementById(searchId).value.toLowerCase();

    Array.from(dropdownElement.children).forEach(option => {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(searchValue) ? 'block' : 'none';
    });
}

const svg = d3.select("svg"),
      width = window.innerWidth,
      height = 600;

svg.attr("width", width).attr("height", height);

const g = svg.append("g");

g.append("defs").append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "-0 -5 10 10")
    .attr("refX", 13)
    .attr("refY", 0)
    .attr("orient", "auto")
    .attr("markerWidth", 3)
    .attr("markerHeight", 3)
    .attr("xoverflow", "visible")
    .append("svg:path")
    .attr("d", "M 0,-5 L 10 ,0 L 0,5")
    .attr("class", "arrowhead");

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(60))
    .force("charge", d3.forceManyBody().strength(-90))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX().strength(0.1).x(d => (d.level - 1) * 1000 + 900))
    .force("y", d3.forceY().strength(0.1).y(height / 2));

const link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .attr("marker-end", "url(#arrowhead)");

const node = g.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 10)
    .attr("fill", d => d.color)
    .on("mouseover", function(event, d) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'block';
        tooltip.innerHTML = `Название: ${d.id}<br>Группа: ${d.group}`;
        tooltip.style.left = (event.pageX + 10) + 'px';
        tooltip.style.top = (event.pageY + 10) + 'px';
    })
    .on("mouseout", function() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    })
    .on("click", function(event, d) {
        highlightPathsThroughNode(d.id);
        d3.select(this).classed("highlighted-node", true);
    })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

simulation.on("tick", () => {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
});

const legend = svg.append("g")
  .attr("class", "legend")
  .attr("transform", "translate(10, 10)");

const uniqueGroup = [...new Set(nodes.map(node => node.group))];

uniqueGroup.forEach((group, index) => {
  const groupNodes = nodes.filter(node => node.group === group);
  const color = groupNodes[0].color;

  const legendRow = legend.append("g")
    .attr("transform", `translate(0, ${index * 25 + 25})`);

  legendRow.append("rect")
    .attr("fill", color)
    .attr("width", 10)
    .attr("height", 10)
    .style("margin-right", "10px");

  legendRow.append("text")
    .text(group)
    .style("font-weight", "bold")
    .attr("x", 30) 
    .attr("y", 15);
});

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

const zoom = d3.zoom()
    .scaleExtent([0.5, 3])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

function resetGraph() {
    svg.selectAll(".link").classed("highlighted", false).style("opacity", 1);
    svg.selectAll(".node").classed("highlighted-node", false).style("opacity", 1);
}

function highlightPathsThroughNode(nodeId) {
    resetGraph();

    const paths = findAllPathsIncludingNode(nodeId);

    if (paths.length > 0) {
        const pathLinks = new Set();
        const pathNodes = new Set();

        paths.forEach(path => {
            path.forEach(step => {
                pathLinks.add(`${step.source}-${step.target}`);
                pathNodes.add(step.source);
                pathNodes.add(step.target);
            });
        });

        svg.selectAll(".link")
            .filter(d => pathLinks.has(`${d.source.id}-${d.target.id}`))
            .classed("highlighted", true)
            .attr("marker-end", "url(#arrowhead-highlighted)");

        svg.selectAll(".node")
            .filter(d => pathNodes.has(d.id))
            .classed("highlighted-node", true);

        svg.selectAll(".node")
            .filter(d => !pathNodes.has(d.id))
            .style("opacity", 0);

        svg.selectAll(".link")
            .filter(d => !pathLinks.has(`${d.source.id}-${d.target.id}`))
            .style("opacity", 0);

        svg.selectAll(".labels text")
            .filter(d => !pathNodes.has(d.id))
            .style("opacity", 0);
    }
}

function findPathOptimized() {
    const startNode = document.getElementById('startNodeSearch').value;
    const endNode = document.getElementById('endNodeSearch').value;

    resetGraph();

    if (!startNode || !endNode) {
        alert("Пожалуйста, выберите оба узла.");
        return;
    }

    const queue = [startNode];
    const visited = new Set();
    const parent = new Map();
    const neighborsMap = new Map();

    links.forEach(link => {
        if (!neighborsMap.has(link.source.id)) {
            neighborsMap.set(link.source.id, []);
        }
        neighborsMap.get(link.source.id).push(link.target.id);
    });

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode === endNode) break;

        const neighbors = neighborsMap.get(currentNode) || [];

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parent.set(neighbor, currentNode);
                queue.push(neighbor);
            }
        });
    }

    let path = [];
    let node = endNode;
    let pathNodes = [endNode];

    while (node !== startNode) {
        if (!parent.has(node)) {
            alert("Путь не найден");
            return;
        }
        path.push({ source: parent.get(node), target: node });
        pathNodes.push(parent.get(node));
        node = parent.get(node);
    }

    path.forEach(step => {
        svg.selectAll(".link")
            .filter(d => d.source.id === step.source && d.target.id === step.target)
            .classed("highlighted", true)
            .attr("marker-end", "url(#arrowhead-highlighted)");
    });

    svg.selectAll(".node")
        .filter(d => pathNodes.includes(d.id))
        .classed("highlighted-node", true);

    svg.selectAll(".node")
        .filter(d => !pathNodes.includes(d.id))
        .style("opacity", 0);

    svg.selectAll(".link")
        .filter(d => !path.some(step => (step.source === d.source.id && step.target === d.target.id)))
        .style("opacity", 0);

    svg.selectAll(".labels text")
        .filter(d => !pathNodes.includes(d.id))
        .style("opacity", 0);
}

document.getElementById('findPathButton').onclick = findPathOptimized;