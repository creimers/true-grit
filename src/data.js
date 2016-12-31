export const DATA = {
  'root': {
    id: 'root',
    children: [
      {
        id: 'beatles',
        children: [
          {
            id: 'john',
            children: [
              {
                id: 'walrus',
                content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              }
            ]
          },
          {
            id: 'paul',
            children: [
              {
                id: 'yesterday',
                content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
              },
              {
                id: 'black bird',
                content: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.'
              }
            ]
          },
          {
            id: 'ringo',
            children: [
              {
                id: 'boys',
                content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
              }
            ]
          },
          {
            id: 'george',
            children: [
              {
                id: 'while my guitar',
                content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
              }

            ]
          }
        ]
      },
      {
        id: 'rolling-stones',
        children: [
          {
            id: 'keith'
          },
          {
            id: 'mick'
          },
          {
            id: 'ron'
          },
          {
            id: 'charlie'
          }
        ]
  },
  {
    id: 'daft-punk',
    children: [
      {
        id: 'Guy-Manuel',
        content: 'Guillaume Emmanuel "Guy-Manuel" de Homem-Christo is a French musician'
  },
  {
    id: 'Thomas Bangalter',
    content: 'Thomas Bangalter is a French musician, record producer, singer, songwriter, DJ, composer and film director'
  }
    ]
  }
    ]
  }
}

export const getTheme = () => {
  const THEMES = [
    {background: '#02d892', color: '#ba3457'},
    //{background: '#623872', color: '#98c587'},
    //{background: '#d08942', color: '#0041b6'},
    //{background: '#72ffe5', color: '#8f0f1e'},
    //{background: '#084be0', color: '#f2b124'},
    //{background: '#3b6b35', color: '#29001d'},
    //{background: '#aa64d4', color: '#393939'},
    //{background: '#7990bd', color: '#fffc9c'},
    //{background: '#662ac3', color: '#98d23f'}
  ]

  return THEMES[Math.floor(Math.random() * THEMES.length)] 
}

export const getData = (routeParams) => {
  let root = {}

  if(!Object.keys(routeParams).length) {
    root = DATA.root
  } 

  else {

    let previousElement = DATA.root
    Object.keys(routeParams).forEach((levelKey) => {
      let route = routeParams[levelKey]
      previousElement = previousElement.children.find((elm) => elm.id === route)
    })
    if (previousElement) {
      root = previousElement
    }
  }

  //root.theme = getTheme()
  return root
}
