import { FC, useState } from 'react';

import classes from './profile.module.scss'
import { Group, Title, Text } from '@mantine/core';
const PersonalInformation: FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Gulnoza',
    lastName: 'Zokirjonova',
    dateOfBirth: '12.09.2000',
    gender: 'Female',
    phoneNumber: '+998',
    email: 'helloets@gmail.com',
    currentPassword: '••••••••',
    newPassword: '••••••••',
    confirmPassword: '••••••••',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={classes.pageContent}>
      <Title order={2} className={classes.pageTitle}>
        Personal Information
      </Title>

      {/* Profile Header */}
      <Group className={classes.profileHeader}>
        <div className={classes.avatar}>
          <img 
            src="/api/placeholder/80/80" 
            alt="Profile" 
            className={classes.avatarImage}
          />
        </div>
        <div>
          <Title order={3} className={classes.userName}>
            Diyora Qodirova
          </Title>
        </div>
      </Group>

      {/* Personal Info Form */}
      <div className={classes.formSection}>
        <div className={classes.formGrid}>
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>First Name</Text>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={classes.input}
            />
          </div>
          
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>Last Name</Text>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={classes.input}
            />
          </div>
          
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>Date of Birth</Text>
            <input
              type="text"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              className={classes.input}
            />
          </div>
          
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>Gender</Text>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className={classes.input}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>Phone Number</Text>
            <input
              type="text"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className={classes.input}
            />
          </div>
          
          <div className={classes.formColumn}>
            <Text className={classes.fieldLabel}>E-mail</Text>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={classes.input}
            />
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className={classes.passwordSection}>
        <Title order={3} className={classes.sectionTitle}>
          Password
        </Title>
        
        <div className={classes.passwordGrid}>
          <div className={classes.passwordColumn}>
            <Text className={classes.fieldLabel}>Current Password</Text>
            <input
              type="password"
              value={formData.currentPassword}
              onChange={(e) => handleInputChange('currentPassword', e.target.value)}
              className={classes.input}
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
            <Text className={classes.fieldLabel}>New password</Text>
            <input
              type="password"
              value={formData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
              className={classes.input}
            />
          </div>
          
          <div className={classes.passwordColumn}>
            <Text className={classes.fieldLabel}>Confirm password</Text>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={classes.input}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <Group className={classes.actionButtons}>
        <button className={classes.deleteButton}>
          Delete account
        </button>
        
        <button className={classes.editButton}>
          Edit profile
        </button>
      </Group>
    </div>
  );
};

export default PersonalInformation