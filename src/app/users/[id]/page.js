import usersClass from './users.module.scss';

export default function Users({ params }) {
  return (
    <>
      <main className={usersClass['users-class-2']}>
        <div>
          USER {params.id}
        </div>
      </main>
    </>
  )
}
