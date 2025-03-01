---
title: Organizations
---

Organizations are used to group projects and manage access to those projects.

<DocsImage src="/img/dashboard/organizations-listed-in-dashboard.png" alt="Organizations"  width-600 ></DocsImage>

## Features

- Create projects
- Invite users
- Transfer projects
- Pay for all of your projects usage.

### Organization ID

An Organization's ID is a unique identifier in
[UUID](https://tools.ietf.org/html/rfc4122) format that can be found under the
"Organization settings" section of the Dashboard. This ID is used frequently by
the Support, Success, and Sales teams to reference an Organization.

To locate your Organization's ID, go to "Organization settings" then
Organization ID. Click on the clipboard icon to copy the ID for easy sharing
with Cypress teams.

<DocsImage src="/img/dashboard/organizations/cypress-organization-UUID.gif" alt="Locate UUID gif" ></DocsImage>

## Managing Organizations

### Create Org

You can create an organization from within the
[Dashboard Service](https://on.cypress.io/dashboard) by opening the organization
switcher and clicking **<Icon name="plus"></Icon> Create new organization**.

<DocsImage src="/img/dashboard/create-org.png" alt="Create new organization" width-600 ></DocsImage>

<DocsImage src="/img/dashboard/add-organization-dialog.png" alt="Add Organization dialog" width-600 ></DocsImage>

### Personal Org

In the past, every user of Cypress was given a personal organization - named
after you. You cannot delete or edit the name of this personal organization,
however you can convert it to a professional organization.

New users will no longer have a personal organization created for them
automatically.

#### Convert to professional org

If you’ve already set up your projects, users, and billing on your personal
organization, you can convert it to a professional organization via the
**Organization settings** page.

<DocsImage src="/img/dashboard/convert-to-professional-org-button.jpg" alt="Convert org for billing" ></DocsImage>

Click the **Convert organization** button, provide a name for the organization,
and hit **Convert organization**. This will do two things:

1. It will upgrade your personal organization to a new named organization. All
   of your projects, users, and billing information will carry over to this new
   organization.
2. We’ll create a new, empty personal organization so you always have a place to
   keep your side projects and experiments!

<DocsImage src="/img/dashboard/convert-to-professional-org-modal.jpg" alt="Convert org to new org" width-600 ></DocsImage>

### Delete Org

You can delete organizations that you own as long as they do not have any
projects in the organization. You must first transfer ownership of your projects
to another organization before you can delete the organization.

<DocsImage src="/img/dashboard/remove-organization-dialog.png" alt="Delete Organization" ></DocsImage>

## Billing & Usage

### Open Source Plan

To support the community, we provide the Open Source (OSS) plan for public
projects to take advantage of our Dashboard Service with unlimited test runs. To
qualify, your project needs two things:

- Your project is a non-commercial entity
- Source code for your project is available in a public location with an
  [OSI-approved license](https://opensource.org/licenses)

### Requesting OSS plan for an org

Follow the following process to request an OSS plan for your project:

1. [Login](https://on.cypress.io/dashboard) to the Cypress Dashboard, or
   [create an account](https://on.cypress.io/dashboard) if you are a new user.
   <DocsImage src="/img/dashboard/oss-plan-1-login.png" alt="Login or Create Account"></DocsImage>
2. Go the [Organizations page](https://on.cypress.io/dashboard/organizations) to
   select the organization you want to associate with an OSS plan. If you have
   no organizations, you can create one by clicking the **+ Add Organization**
   button.
   > **Note**: Personal organizations cannot be used with an OSS plan.

<DocsImage src="/img/dashboard/oss-plan-2-select-org.png" alt="Select or add organization"></DocsImage> 3.
Go to the **Billing & Usage** page, and then click on the **Apply for an open
source plan** link at the bottom of the page.
<DocsImage src="/img/dashboard/oss-plan-3-billing.png" alt="Click Apply for an open source plan"></DocsImage> 4.
Fill in and submit the OSS plan request form.
<DocsImage src="/img/dashboard/oss-plan-4-apply.png" alt="OSS plan request form"></DocsImage> 5.
You'll receive an email confirming your request. The Cypress Team will review
your request and, if approved, an OSS plan subscription will be applied to your
organization.

If you have any questions regarding the OSS plan, please feel free
[contact us](mailto:hello@cypress.io).

## Integrations

- [BitBucket](/guides/dashboard/bitbucket-integration)
- [GitHub](/guides/dashboard/github-integration)
- [GitLab](/guides/dashboard/gitlab-integration)
- [Jira](/guides/dashboard/jira-integration)
- [Slack](/guides/dashboard/slack-integration)

### Enterprise SSO

<Alert type="success">

<strong class="alert-header"><Icon name="star"></Icon> Premium Dashboard
Feature</strong>

Enterprise SSO is included in our
[Business and Enterprise paid pricing plans](https://www.cypress.io/pricing).

</Alert>

<Alert type="warning">

<strong class="alert-header">Requires Owner Permissions</strong>

**All instructions below must be done by an Owner of the organization.** If you
are not an Owner of the Organization, coordinate with an Owner of the
Organization to set up SSO.

</Alert>

#### Enable SSO

1. Log in to the Cypress Dashboard and navigate to the **Integrations** page for
   your organization.
   <DocsImage src="/img/dashboard/organizations/integrations-nenu-screenshot.png" alt="Enable SSO" width-600 ></DocsImage>
2. Scroll down to the **Enterprise SSO** section. Select your SSO provider and
   take note of the information provided and required. Keep this window open and
   continue to the
   [configuration instructions for your specific SSO provider](#SSO-Provider-Configuration)
   below.

#### SSO Provider Configuration

Follow the instructions below for your specific SSO provider.

- [Okta](#Okta)
- [SAML](#SAML)
- [Azure AD](#Azure-AD)

##### **Okta**

The Cypress Dashboard can integrate with Okta via SAML. In addition to the
documentation below, refer to
[Okta’s official documentation for setting up a new SAML application.](https://developer.okta.com/docs/guides/saml-application-setup/overview/)

1. Log into your Okta dashboard and head to the **Admin** section.
   <DocsImage src="/img/dashboard/organizations/okta-admin-cypress-sso-setup.png" alt="Okta Admin" ></DocsImage>
1. Create a new SAML-based Web application.
   <DocsImage src="/img/dashboard/organizations/okta-add-application-step1-cypress-sso.png" alt="Create Okta SAML App" ></DocsImage>
   <DocsImage src="/img/dashboard/organizations/okta-add-application-step3-cypress-sso.png" alt="Create Okta SAML App" width-600 ></DocsImage>
1. Supply the following information requested in the Okta setup wizard:

- **App name:** `Cypress Dashboard`
- **App logo:** [Cypress logo download](https://on.cypress.io/logo)
- **Single sign on URL:** The URL provided in the Cypress Dashboard
- **Audience URI:** The URI provided in the Cypress Dashboard
- **Attribute statements:** Add the attribute statements described in the
  Cypress Dashboard

1. Click **Next** then select **I’m an Okta customer** and click **Finish**.
1. Click the **View Setup Instructions** button in the middle of the page. The
   Cypress Dashboard needs the information provided here:

- Copy the Identity Provider Single sign-on URL to the Cypress Dashboard.
- Download the certificate and upload that to the Cypress Dashboard.
  <DocsImage src="/img/dashboard/organizations/okta-download-certificate-for-cypress-dashboard.png" alt="Download Certificate" ></DocsImage>

1. Navigate to the **Assignments** tab and grant your users access to the
   Cypress Dashboard.
1. [Save and test the configuration](#Save-and-Test).

##### **SAML**

The Cypress Dashboard can integrate with your identity provider via SAML. In
addition to the documentation below, refer to your provider’s official
documentation for configuring a SAML integration.

<DocsImage src="/img/dashboard/organizations/enterprise-SSO-SAML.png" alt="SAML SSO" ></DocsImage>

1. Log into the admin interface for your identity provider.
1. Work through the setup wizard supplying the information requested:

- **App name:** `Cypress Dashboard`
- **App logo:** [Cypress logo download](https://on.cypress.io/logo)
- **Single sign on URL:** Collect the URL provided by the Cypress Dashboard
- **Audience URI:** Collect the URI provided by the Cypress Dashboard
- Add a custom mapping of **AttributeStatements** with the following:
  - `User.Email`: User’s email
  - `User.FirstName`: User’s first name
  - `User.LastName`: User’s last name

1. Collect the sign-on URL and certificate from your identity provider. Supply
   that to the Cypress Dashboard.
1. [Save and test the configuration](#Save-and-Test).

##### **Azure AD**

The Cypress Dashboard can integrate with your identity provider via Azure AD. In
addition to the documentation below, refer to the Microsoft Guides for
[configuring an application](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).

1. Log into the Azure portal and create a new Application.
1. Work through the application setup, supplying the following information when
   requested:

- **App name:** `Cypress Dashboard`
- **App logo:** [Cypress logo download](https://on.cypress.io/logo)
- **Login URL:** Collect the URL provided by the Cypress Dashboard

1. Collect the `Client ID` for your application provided in the Application
   overview page.
1. Go to **Certificates and Secrets** in your Azure Application and create a new
   secret that does not expire. Copy this newly-created secret and paste it in
   the `Azure Client Secret` field in the Cypress Dashboard.
1. Under **API Permissions** in Azure AD, ensure the application has access to
   **User.Read** permissions
1. Enter the domain used for your Active Directory, as well as the list of SSO
   domains you wish to allow user to authenticate with, in the Cypress
   Dashboard. This is used for SSO discovery from the login screen.
1. [Save and test the configuration](#Save-and-Test).

#### Save and Test

1. Return to the Cypress Dashboard and click **Save and test configuration**.
   The Cypress Dashboard will attempt to authenticate.

🎉 Your integration is now complete! You can invite all of the users in your
organization to sign in through your SSO provider.

#### **Notes**

- Once SSO is set up in the Dashboard, Users should be invited via your SSO
  provider, not the Dashboard.
- All SSO Users are initially added with the
  [User Role](https://on.cypress.io/users#User-roles) of Member. If a User needs
  different User Role permissions, this can be changed via the Cypress Dashboard
  by a current member with the role of Owner or Admin.
