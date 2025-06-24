import { Group, Text, Title } from "@mantine/core";
import { FC, useState } from "react";



// import UserImage from "@/shared/assets/images/Frame 1000001864.png";
import { Input, Select } from "@/shared/ui";



import classes from "./profile.module.scss";





const PersonalInformation: FC = () => {
	const [formData, setFormData] = useState({
		firstName: "Gulnoza",
		lastName: "Zokirjonova",
		dateOfBirth: "12.09.2000",
		gender: "Female",
		phoneNumber: "+998",
		email: "helloets@gmail.com",
		currentPassword: "••••••••",
		newPassword: "••••••••",
		confirmPassword: "••••••••",
	})

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }))
	}

	const genderOptions = ["Male", "Female", "Other"]
	return (
		<div className={classes.pageContent}>
			<Title  className={classes.pageTitle}>
				Personal Information
			</Title>
			<Group className={classes.profileHeader} mt="24px">
				<div className={classes.avatar}>
					<img src="" alt="Profile" className={classes.avatarImage} />
				</div>
				<div>
					<Title order={3} className={classes.userName}>
						Diyora Qodirova
					</Title>
				</div>
			</Group>

			<div className={classes.formSection}>
				<div className={classes.formGrid}>
					<div className={classes.formColumn}>
            <Input
              label='First Name'
							type="text"
							value={formData.firstName}
							onChange={(e) => handleInputChange("firstName", e.target.value)}
						/>
					</div>

					<div className={classes.formColumn}>
            <Input
              label='Last Name'
							type="text"
							value={formData.lastName}
							onChange={(e) => handleInputChange("lastName", e.target.value)}
							// className={classes.input}
						/>
					</div>

					<div className={classes.formColumn}>
            <Input
              label='Date of Birth'
							type="text"
							value={formData.dateOfBirth}
							onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
						/>
					</div>

					<div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>Gender</Text>
            <Select
              data={genderOptions}
              value={formData.gender}
              onChange={(value: any) => handleInputChange("gender", value)}
              placeholder="Select gender"
            />
          </div>

					<div className={classes.formColumn}>
            <Input
              label='Phone Number'
							type="text"
							value={formData.phoneNumber}
							onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
						/>
					</div>

					<div className={classes.formColumn}>
            <Input
              label='E-mail'
							type="email"
							value={formData.email}
							onChange={(e) => handleInputChange("email", e.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className={classes.passwordSection}>
				<Title order={3} className={classes.sectionTitle}>
					Password
				</Title>

				<div className={classes.passwordGrid}>
					<div className={classes.passwordColumn}>
            <Input
              label='Current Password'
							type="password"
							value={formData.currentPassword}
							onChange={(e) =>
								handleInputChange("currentPassword", e.target.value)
							}
						/>
					</div>
				</div>

				<div className={classes.forgotPassword}>
					<a href="#" className={classes.forgotLink}>
						Forgot password?
					</a>
				</div>

				<div className={classes.passwordGrid}>
					<div className={classes.passwordColumn}>
            <Input
              label='New password'
							type="password"
							value={formData.newPassword}
							onChange={(e) => handleInputChange("newPassword", e.target.value)}
						/>
					</div>
        </div>
        <div className={classes.passwordGrid}>
          <div className={classes.passwordColumn}>
              <Input
                label="Confirm password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
              />
          </div>
        </div>
			</div>
			<Group className={classes.actionButtons}>
				<button className={classes.deleteButton}>Delete account</button>

				<button className={classes.editButton}>Edit profile</button>
			</Group>
		</div>
	)
}

export default PersonalInformation