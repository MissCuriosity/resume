import tree from './tree'

const handleInput = (input, path) => {
    if (input.indexOf('cd') == 0) {
        let targetpath = input
            .split('cd')[1]
            .trim()
        switch (targetpath) {
            case 'projects':
                return [targetpath]
            case '~':
                return [targetpath]
            default:
                return '-bash: cd: ' + targetpath + ': No such file or directory'
        }
    } else if (input.indexOf('open') == 0) {
        let target = input
            .split('open')[1]
            .trim()
        let paths = findPath(path)
        if (typeof(paths[target]) === 'string') {
            return paths[target]
        } else if (typeof(paths[target]) === 'object') {
            return target+' can not open'
        } else {
            return '-bash: open ' + target + ': No such file or directory'
        }
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
                    let temp = []
                    for (let i in findPath(path)) {
                        temp.push(i)
                    }
                    temp[0] = '<p>' + temp[0]
                    temp[temp.length - 1] = temp[temp.length - 1] + '</p>'
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
                return `{
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
        "Chinese", 
        "English"
    ]
}                `
            case '':
                return ''
            default:
                return '-bash: ' + input + ': command not found'
        }
    }
}

const findPath = (path, currentTree = tree) => {
    if (currentTree[path] !== undefined) {
        return currentTree[path]
    } else {
        for (let key in currentTree) {
            if (key == path) {
                return currentTree[key]
            } else {
                return findPath(path, currentTree[key])
            }
        }
    }
}

export default handleInput