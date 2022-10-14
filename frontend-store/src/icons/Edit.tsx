interface Props { 
    onclick(): void
}

export const EditIcon: React.FC<Props> = ({onclick}) => { 
    return <svg onClick={onclick} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z" fill="none" stroke="#2483a9" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="#2483a9" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="164" y1="92" x2="68" y2="188" fill="none" stroke="#2483a9" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="95.5" y1="215.5" x2="40.5" y2="160.5" fill="none" stroke="#2483a9" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
}