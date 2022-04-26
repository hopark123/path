import { EditProfile, ChangePassword, Terms, Policy, Consent, Service} from "./index"

export function Body(props) {
	const {profile, makeProfile, setProfile } = props
	return (
		<>
			<div className='myp-list'>
				<h2> 계정관리 </h2>
				<ul>
	
					<EditProfile profile={profile} makeProfile={makeProfile}/>
					<ChangePassword profile={profile} makeProfile={makeProfile} setProfile={setProfile}/>
					<Terms />
					<Policy />
					<Consent profile={profile} makeProfile={makeProfile} />
					<Service />
				</ul>
			</div>

		</>
	)
}