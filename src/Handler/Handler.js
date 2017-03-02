import tree from './tree'

const handleInput = (input, path) => {
    if (input.indexOf('cd') >= 0) {
        return 'not ready yet'
        // do something
    } else {
        switch (input) {
            case 'help':
                return `You can navigate either by clicking on anything that underlines
when you put your mouse over it, or by typing commands in the terminal.
Type the name of a link to view it. Use "profile" to change the theme and
text color, use "cd" to change into a directory or use "ls" to list the
contents of that directory. The contents of a file can be viewed using "open".
Commands are(case insensitive):

<code >open  cd  ls  profile  help  tree</code>       
`
            case 'ls':
                {
                    let temp=[]
                    for (let key in tree) {
                        if (key == path) {
                           for (let k in tree[key]){
                               temp.push(k)
                           }
                        }
                    }
                 temp[0]='<p>'+temp[0]
                 temp[temp.length-1]=temp[temp.length-1]+'</p>'
                    return temp.join('      ')
                }
            case 'tree':
                return `~
|——README
|——resume
|——projects
|  |——Blog
|  |——Github
                `
            case 'profile':
                let s = `{
    "Name": "ZhangZeQing",
    "Environment": "Win32/Vscode/Git",
    "Skills": {
        "HTML": "[########___]",
        "CSS": "[########___]",
        "JavaScript": "[#########__]",
        "jQuery": "[########___]",
        "TypeScript":"[######_____]"
        "Angular2": "[####_______]",
        "React": "[####_______]",
        "NodeJs": "[#######____]",
        "Prob-solving": "[##########_]",
        "Motivation": "[###########]",
        "Reliability": "[###########]",
        "Hard-working": "[###########]"
    },
    "CurrentlyLearning": [
        "React"
    ],
    "Languages": [
        "Chinese", "English"
    ]
}                `
                return s
            default:
                return '-bash: ' + input + ': command not found'
        }
    }
}

export default handleInput