
function AvatarUsingProps({ person, size = 150, url}) {
    return (
        <img
            className="avatar"
            src={person.url}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function ProfilePersonPassingProps() {
    return (
        <div>
            <AvatarUsingProps
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                    url: 'https://i.imgur.com/1bX5QH6.jpg'
                }}
            />

            <AvatarUsingProps
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                    url: 'https://i.imgur.com/1bX5QH6.jpg'
                }}
            />
            <AvatarUsingProps
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh',
                    url: 'https://i.imgur.com/1bX5QH6.jpg'

                }}
            />
            <AvatarUsingProps
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6',
                    url: 'https://i.imgur.com/1bX5QH6.jpg'

                }}
            />
        </div>
    );
}
