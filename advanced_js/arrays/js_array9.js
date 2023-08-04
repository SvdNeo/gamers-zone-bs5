const groups = [
    {
        groupName: "Admins",
        description: "Group with administrative privileges",
        members: ["user1@example.com", "user2@example.com"]
    },
    {
        groupName: "Developers",
        description: "Group with development access",
        members: ["user3@example.com", "user4@example.com", "user5@example.com"]
    },
    {
        groupName: "Support",
        description: "Group with support access",
        members: ["user6@example.com", "user7@example.com"]
    }
];

// Accessing and using the group properties
for (const group of groups) {
    console.log("Group Name:", group.groupName);
    console.log("Description:", group.description);
    console.log("Members:", group.members);
    console.log("-------------------------------------");
}


const groups2 = [
    {
        groupName: "Admins",
        description: "Group with administrative privileges",
        members: ["user1@example.com", "user2@example.com"],
        policies: ["AdminPolicy"]
    },
    {
        groupName: "Developers",
        description: "Group with development access",
        members: ["user3@example.com", "user4@example.com", "user5@example.com"],
        policies: ["DevPolicy"]
    },
    {
        groupName: "Support",
        description: "Group with support access",
        members: ["user6@example.com", "user7@example.com"],
        policies: ["SupportPolicy"]
    }
];

// Accessing and using the group properties
for (const group of groups2) {
    console.log("Group Name:", group.groupName);
    console.log("Description:", group.description);
    console.log("Members:", group.members);
    console.log("Policies:", group.policies);
    console.log("-------------------------------------");
}

