export interface IData {
    imageURL: string
    author: string
    published: boolean
    width: string
    height: string
    photoType: string
    images: string[]

}

const mockData: IData[] = [
    {
        imageURL:"https://images.unsplash.com/photo-1538819137474-ffa0ee381af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80",
        author: "Yang Sukiki",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
        author: "Chad Holiday",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
        author: "Gideon Girigiri",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1553163948-63d03698b330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FkJTIwYm95fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        author: "Gideon Girigiri",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3594&q=80",
        author: "Alex Marow",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1589155263246-f22a352a63d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
        author: "Gideon Girigiri",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80",
        author: "Akira Toriko",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1616380165072-03d8dbbc84d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3687&q=80",
        author: "Akira Toriko",
        published: true,
        width: '19.7',
        height: '463',
        photoType: 'single',
        images: [],
    },
    {
        imageURL:"https://images.unsplash.com/photo-1616380165072-03d8dbbc84d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3687&q=80",
        author: "Akira Toriko",
        published: true,
        width: '19.7',
        height: '463',
        images: [
            "https://images.unsplash.com/photo-1618553577523-3a5cfb783386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2736&q=80",
            "https://images.unsplash.com/photo-1618799805265-4f27cb61ede9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80",
            "https://images.unsplash.com/photo-1692680887047-357bbef7b16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2583&q=80",
            "https://images.unsplash.com/photo-1665088127661-83aeff6104c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        ],
        photoType: 'multiple',
    },
        
]

window.localStorage.setItem('mockdata', JSON.stringify(mockData))

export default mockData