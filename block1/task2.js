function highlightKeywords(strings, ...values) {
    strings = strings.split(/\${\d+}/)
    const keywords = values[0];
    let result = '';

    strings.forEach((str, index) => {
        result += str;
        if (index < keywords.length) {
            result += `<span class='highlight'>${keywords[index]}</span>`;
        }
    });

    return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
