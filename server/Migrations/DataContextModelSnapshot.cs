﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server.data;

namespace server.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("server.Models.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("TaskId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("content")
                        .HasColumnType("TEXT");

                    b.HasKey("CommentId");

                    b.HasIndex("TaskId");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("server.Models.CommentReply", b =>
                {
                    b.Property<int>("ReplyId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ReplyToId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ReplyId", "ReplyToId");

                    b.HasIndex("ReplyToId")
                        .IsUnique();

                    b.ToTable("CommentReplies");
                });

            modelBuilder.Entity("server.Models.Invitation", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("OrganizationId")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId", "OrganizationId");

                    b.HasIndex("OrganizationId");

                    b.ToTable("Invitations");
                });

            modelBuilder.Entity("server.Models.Organization", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Color")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Organizations");
                });

            modelBuilder.Entity("server.Models.OrganizationUser", b =>
                {
                    b.Property<int>("OrganizationId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Role")
                        .HasColumnType("TEXT");

                    b.HasKey("OrganizationId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("OrganizationUsers");
                });

            modelBuilder.Entity("server.Models.Task", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AssigneeId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<int>("CreatorId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("LastUpdated")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("AssigneeId");

                    b.HasIndex("CreatorId");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("server.Models.TaskDependency", b =>
                {
                    b.Property<int>("DependeeId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DependerId")
                        .HasColumnType("INTEGER");

                    b.HasKey("DependeeId", "DependerId");

                    b.HasIndex("DependerId");

                    b.ToTable("TaskDependencies");
                });

            modelBuilder.Entity("server.Models.TaskWatch", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TaskId")
                        .HasColumnType("INTEGER");

                    b.HasKey("UserId", "TaskId");

                    b.HasIndex("TaskId");

                    b.ToTable("TaskWatches");
                });

            modelBuilder.Entity("server.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("KnownAs")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("server.Models.Comment", b =>
                {
                    b.HasOne("server.Models.Task", "Task")
                        .WithMany()
                        .HasForeignKey("TaskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.CommentReply", b =>
                {
                    b.HasOne("server.Models.Comment", "Reply")
                        .WithMany("Replies")
                        .HasForeignKey("ReplyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.Comment", "ReplyTo")
                        .WithOne("ReplyTo")
                        .HasForeignKey("server.Models.CommentReply", "ReplyToId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.Invitation", b =>
                {
                    b.HasOne("server.Models.Organization", "Organization")
                        .WithMany("Invitations")
                        .HasForeignKey("OrganizationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.User", "User")
                        .WithMany("Invitations")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.OrganizationUser", b =>
                {
                    b.HasOne("server.Models.Organization", "Organization")
                        .WithMany("Users")
                        .HasForeignKey("OrganizationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.User", "User")
                        .WithMany("Organizations")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.Task", b =>
                {
                    b.HasOne("server.Models.User", "Assignee")
                        .WithMany("AssignedTasks")
                        .HasForeignKey("AssigneeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.User", "Creator")
                        .WithMany("CreatedTasks")
                        .HasForeignKey("CreatorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.TaskDependency", b =>
                {
                    b.HasOne("server.Models.Task", "Dependee")
                        .WithMany("Dependees")
                        .HasForeignKey("DependeeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.Task", "Depender")
                        .WithMany("Dependers")
                        .HasForeignKey("DependerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.TaskWatch", b =>
                {
                    b.HasOne("server.Models.Task", "Task")
                        .WithMany("Watchers")
                        .HasForeignKey("TaskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("server.Models.User", "User")
                        .WithMany("WatchedTasks")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
