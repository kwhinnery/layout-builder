export const UI_STATE = [
  {
    id: 'appContainer',
    text: 'App Container',
    droppable: true,
    data: {
      tagName: 'div',
      tagProps: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '10px 0'
        },
      },
      children: [
        // Default Header
        {
          id: 'header',
          text: 'Header',
          droppable: true,
          data: {
            tagName: 'div',
            tagProps: {
              style: {
                display: 'flex',
                alignItems: 'center',
                height: '80px',
                gap: '10px',
                padding: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }
            },
            innerHtml: '',
            children: [
              {
                id: 'logo',
                text: 'Logo Image',
                droppable: false,
                data: {
                  tagName: 'img',
                  tagProps: {
                    src: 'https://i.imgur.com/MRaXB3a.jpeg',
                    style: {
                      height: '60px'
                    },
                  },
                  innerHtml: '',
                  children: []
                }
              },
              {
                id: 'headerText',
                text: 'Header Text',
                droppable: false,
                data: {
                  tagName: 'h1',
                  tagProps: {
                    style: {
                      fontSize: '2em',
                      padding: 0,
                    },
                  },
                  innerHtml: 'Layout UI Example',
                  children: []
                }
              },
            ]
          }
        },

        // Page Contents
        {
          id: 'page',
          text: 'Page Content',
          droppable: true,
          data: {
            tagName: 'div',
            tagProps: {
              style: {
                display: 'flex',
                flexGrow: '1',
                gap: '10px'
              }
            },
            children: [
              {
                id: 'sidebar',
                text: 'Sidebar',
                droppable: true,
                data: {
                  tagName: 'div',
                  tagProps: {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      width: '25%',
                      minWidth: '25%',
                      padding: '10px',
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }
                  },
                  children: [
                    {
                      id: 'sidebarHeader',
                      text: 'Sidebar Header',
                      droppable: false,
                      data: {
                        tagName: 'h2',
                        tagProps: {
                          style: {},
                        },
                        innerHtml: 'Navigation',
                        children: []
                      }
                    },
                    {
                      id: 'sidebarText',
                      text: 'Sidebar Text',
                      droppable: false,
                      data: {
                        tagName: 'p',
                        tagProps: {
                          style: {},
                        },
                        innerHtml: 'Here is some content in the sidebar.',
                        children: []
                      }
                    },
                  ]
                }
              },
              {
                id: 'main',
                text: 'Main Content',
                droppable: true,
                data: {
                  tagName: 'div',
                  tagProps: {
                    style: {
                      flexGrow: 1,
                      overflow: 'auto',
                      padding: '10px',
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                    }
                  },
                  children: [
                    {
                      id: 'mainHeader',
                      text: 'Main Header',
                      droppable: false,
                      data: {
                        tagName: 'h2',
                        tagProps: {
                          style: {
                            fontSize: '1.5em'
                          },
                        },
                        innerHtml: 'Main Content',
                        children: []
                      }
                    },
                    {
                      id: 'mainText',
                      text: 'Main Text',
                      droppable: false,
                      data: {
                        tagName: 'p',
                        tagProps: {
                          style: {},
                        },
                        innerHtml: 'The main content should be scrollable.',
                        children: []
                      }
                    },
                  ]
                }
              }
            ]
          }
        }
      ]
    },
  },
];
