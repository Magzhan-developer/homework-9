// 7-упражнение

// const body = document.body

// const n = prompt('введите размер шахматной доски (n x n,только одно значение n):')

// const parent = document.createElement('div')

// body.append(parent)


// for(let i = 0;i < n ;i++){
//     const child = document.createElement('div')
//     parent.append(child)

//     child.classList.add('child')
//     for (let index = 0; index < n; index++) {
//         if((index + i) % 2 == 0){
//             const kvadrat_black = document.createElement('div')
//             kvadrat_black.classList.add('square_black')
//             child.append(kvadrat_black)
//         }
//         else{
//             const kvadrat_white = document.createElement('div')
//             kvadrat_white.classList.add('square_white')
//             child.append(kvadrat_white)
//         }
        
//     }
// }


// =========================================================================


// 8-упражнение

// const n = prompt('введите количество окружностей:')
// const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "brown"];

// for(let i = 0;i < n;i++){

//     const randomIndex = Math.floor(Math.random()*colors.length)
//     const body = document.body
//     body.style.width = "1024px"
//     body.style.height = "768px"
//     const aka = document.createElement('div')
//     aka.style.width = '100px'
//     aka.style.height = '100px'
//     aka.style.borderRadius = '50%'

//     aka.style.backgroundColor = colors[randomIndex]
//     body.append(aka)
//     body.style.position = 'relative'
//     aka.style.position = 'absolute'

//     const procentTop = (Math.random() * 100)+"%"
//     const procentLeft = (Math.random() * 100)+"%"

//     aka.style.top = procentTop
//     aka.style.left = procentLeft


// }
