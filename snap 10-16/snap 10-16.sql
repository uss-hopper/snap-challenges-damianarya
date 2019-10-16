create table task (
   taskId binary(20) not null,
   taskTitle varchar(255) not null,
   taskStartDate datetime(0) null,
   taskDueDate datetime(0) null,
   taskStatus varchar(64) not null,
   taskPriority varchar (64)not null,
   taskDescription varchar(256) null,
   PRIMARY KEY (taskId)

/**part two**/

		SELECT tweet.tweetContent, profile.profileAtHandle
	FROM tweet
	INNER JOIN `like` ON tweet.tweetId = like.likeTweetId
	INNER JOIN profile ON like.likeProfileId = profile.profileId
	WHERE  tweet.tweetId = UNHEX(`0536faef082b454e9d444cdbe7887d7a`);

