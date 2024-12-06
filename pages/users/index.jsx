import { useRouter } from 'next/router'

export default function UsersPage() {
    const router = useRouter();
    const { pathname, query } = router;

    return (
        <>
            <h1>Users Page</h1>
            <ul>
                <li>Pathname: {pathname}</li>
                <li>Query: {Object.keys(query).length === 0 && 'empty'}</li>
            </ul>
        </>
    );
}