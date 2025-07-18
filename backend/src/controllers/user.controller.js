import FriendRequest from "../models/FriendRequest.models.js";
import User from "../models/User.models.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user
    const recommendations = await User.find({ $and:[
        {_id: { $ne: currentUserId }},//exclude current user
        {$id: { $nin: currentUser.friends }},//exclude current user's friends
        {isOnboarderd: true}//only include onboarded users
    ]
})
  res.status(200).json({ success: true, recommendations });
  } catch (error) {
    console.error("Error fetching recommended users:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export async function getMyFriends(req, res) {
  try {
    const user = await User.findById(req,user.id)
    .select("friends")
    .populate("friends", "fullName profilePicture nativeLanguage learningLanguage");
    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}   

export async function sendFriendRequest(req, res) {
    try {
        const myId = req.user.id;
        const {id:recipientId} = req.params;

        if (myId === recipientId) {
            return res.status(400).json({ message: "You cannot send a friend request to yourself" });
        }

        const recipient = await User.findById(recipientId);

        if (!recipient) {
            return res.status(404).json({ message: "Recipient not found" });
        }

        // Check if the recipient is already a friend
        if (recipient.friends.includes(myId)) {
            return res.status(400).json({ message: "You are already friends with this user" });
        }
        // Check if a friend request already exists
        const existingRequest= await FriendRequest.findOne({ 
            $or:[
                {sender:myId,recipient:recipientId},
                {sender:recipientId,recipient:myId},
            ],
        });

        if (existingRequest) {
            return res.status(400).json({ message: "Friend request already exists bw you and this user" });
        }

        // Create a new friend request
        const friendRequest = await FriendRequest.create({
            sender: myId,
            recipient: recipientId
        });
        res.status(201).json(friendRequest);
    } catch (error) {
        console.error("Error sending friend request:", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function acceptFriendRequest(req, res) {
  try {
    const { id: requestId } = req.params;
    const friendRequest = await FriendRequest.findById(requestId);
    if(!friendRequest){
        return res.status(404).json({ message: "Friend request not found" });
    }

    // Check if the user is the recipient of the friend request
    if (friendRequest.recipient.toString() !== req.user.id) {
        return res.status(403).json({ message: "You are not authorized to accept this friend request" });
    }
    friendRequest.status = "accepted";
    await friendRequest.save();

    // Add each other to friends list
    // $addToSet: adds a value to an array only if it doesn't already exist in the array
    await User.findByIdAndUpdate(friendRequest.recipient, {
        $addToSet: { friends: friendRequest.sender }
    });
    await User.findByIdAndUpdate(friendRequest.sender, {
        $addToSet: { friends: friendRequest.recipient }
    });
    res.status(200).json({ message: "Friend request accepted" });
  } catch (error) {
    console.error("Error accepting friend request:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getFriendRequests(req, res) {
  try {
    const userId = req.user.id;
    const incomingRequests = await FriendRequest.find({
      recipient: userId,
      status: "pending"
    }).populate("sender", "fullName profilePicture nativeLanguage learningLanguage");

    const acceptedRequests = await FriendRequest.find({
      sender: userId,
      status: "accepted"
    }).populate("recipient", "fullName profilePicture nativeLanguage learningLanguage");

    res.status(200).json({ incomingRequests, acceptedRequests });
  } catch (error) {
    console.error("Error fetching friend requests:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getOutgoingFriendRequests(req, res) {
  try {
    const userId = req.user.id;
    const outgoingRequests = await FriendRequest.find({
      sender: userId,
      status: "pending"
    }).populate("recipient", "fullName profilePicture nativeLanguage learningLanguage");

    res.status(200).json(outgoingRequests);
  } catch (error) {
    console.error("Error fetching outgoing friend requests:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
